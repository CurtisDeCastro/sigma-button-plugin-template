import React from 'react';
import './App.css';
import { Button } from 'antd';


import {
 client,
 useConfig,
 useElementData,
 useElementColumns,
} from "@sigmacomputing/plugin";


client.config.configureEditorPanel([
  { name: "ButtonFormat", label: "Button Formatting", type: "group"},
  { name: "buttonText", label: "Button Text", type: "text", defaultValue: "Click Me", source: "ButtonFormat"},
  { name: "buttonTextFont", label: "Button Text Font", type: "text", defaultValue: "Arial", source: "ButtonFormat"},
  { name: "buttonTextSize", label: "Button Text Size (px)", type: "text", defaultValue: "16", source: "ButtonFormat"},
  { name: "buttonTextColor", label: "Button Text Color (Hex)", type: "text", defaultValue: "000000", source: "ButtonFormat"},
  { name: "buttonColor", label: "Button Color (Hex)", type: "text", defaultValue: "ffffff", source: "ButtonFormat"},
  { name: "buttonMargin", label: "Button Margin (em)", type: "text", defaultValue: "10", source: "ButtonFormat"},
  { name: "buttonPadding", label: "Button Padding (em)", type: "text", defaultValue: "0", source: "ButtonFormat"},
  { name: "buttonBorderRadius",label: "Button Border Radius (px)", type: "text", defaultValue: "5", source: "ButtonFormat"},
  { name: "data", type: "element" },
  {
    name: "Inputs",
    type: "column",
    source: "data",
    allowMultiple: true,
    allowedTypes: ['datetime', 'integer', 'text', 'boolean', 'number']
  },
  { name: "actions", label: "Click Actions", type: "group"},
  { name: "code",label: "Code", type: "text", defaultValue: "console.log(config)", source: "actions"},
]);

const App = () => {


 const config = useConfig();
 const rawSigmaData = useElementData(config.data);
 const sigmaData = Object.keys(rawSigmaData).reduce((acc, key) => {
   const newKey = key.split('/').pop().toLowerCase();
   acc[newKey] = rawSigmaData[key];
   return acc;
 }, {});
 const sigmaCols = useElementColumns(config.data);

  return (
    <Button 
      type={config.buttonType}
      block={true}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `#${config.buttonColor}`,
        color: `#${config.buttonTextColor}`,
        margin: config.buttonMargin + 'em',
        padding: config.buttonPadding + 'em',
        borderRadius: config.buttonBorderRadius + 'px',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        fontSize: config.buttonTextSize + 'px',
        fontFamily: config.buttonTextFont
      }}
      size={config.buttonSize}
      onClick={() => {
        eval(config.code);
      }}
    >
      {config.buttonText || "Click Me"}
    </Button>
  );
}

export default App;

