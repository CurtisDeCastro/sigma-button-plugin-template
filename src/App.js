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
  { name: "actions", label: "Click Actions", type: "group"},
  { name: "code",label: "Code", type: "text", defaultValue: "console.log(config)", source: "actions"},
  { name: "data", type: "element" },
  {
    name: "Inputs",
    type: "column",
    source: "data",
    allowMultiple: true,
    allowedTypes: ['datetime', 'integer', 'text', 'boolean', 'number']
  },
  { name: "ButtonFormat", label: "Button Style", type: "group"},
  { name: "buttonText", label: "Text", type: "text", defaultValue: "Click Me", source: "ButtonFormat"},
  { name: "buttonTextFont", label: "Font", type: "text", defaultValue: "Arial", source: "ButtonFormat"},
  { name: "buttonTextSize", label: "Text Size (px)", type: "text", defaultValue: "16", source: "ButtonFormat"},
  { name: "buttonTextColor", label: "Text Color (Hex)", type: "text", defaultValue: "000000", source: "ButtonFormat"},
  { name: "buttonColor", label: "Color (Hex)", type: "text", defaultValue: "ffffff", source: "ButtonFormat"},
  { name: "buttonMargin", label: "Margin (em)", type: "text", defaultValue: "10", source: "ButtonFormat"},
  { name: "buttonPadding", label: "Padding (em)", type: "text", defaultValue: "0", source: "ButtonFormat"},
  { name: "buttonBorderRadius",label: "Border Radius (px)", type: "text", defaultValue: "5", source: "ButtonFormat"},
  { name: "TextboxFormat", label: "Textbox Style", type: "group"},
  { name: "TextboxFontSize", label: "Font Size (pt)", type: "text", defaultValue: "10", source: "TextboxFormat"},
  { name: "TextboxPadding", label: "Padding (px)", type: "text", defaultValue: "10", source: "TextboxFormat"},
  { name: "TextboxTextColor", label: "Text Color (Any CSS)", type: "text", defaultValue: "white", source: "TextboxFormat"},
  { name: "TextboxAlign", label: "Text Alignment (Any CSS)", type: "text", defaultValue: "center", source: "TextboxFormat"},
  { name: "TextboxBackground", label: "Background Color (Any CSS)", type: "text", defaultValue: "none", source: "TextboxFormat"},
]);

const App = () => {


  const config = useConfig();
  const rawSigmaData = useElementData(config.data);

  const sigmaData = Object.keys(rawSigmaData).reduce((acc, key) => { // eslint-disable-line no-unused-vars
    const newKey = key.split('/').pop().toLowerCase();
    acc[newKey] = rawSigmaData[key];
    return acc;
  }, {});
  const sigmaCols = useElementColumns(config.data); // eslint-disable-line no-unused-vars

  const [callResult, setCallResult] = React.useState('');

  const Return = setCallResult; // eslint-disable-line no-unused-vars

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
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
          width: 'calc(100% - ' + config.buttonMargin + 'em)',
          height: 'calc(100% - ' + config.buttonMargin + 'em)',
          objectFit: 'contain',
          fontSize: config.buttonTextSize + 'px',
          fontFamily: config.buttonTextFont, 
        }}
        size={config.buttonSize}
        onClick={() => {
          eval(config.code); // eslint-disable-line no-eval
        }}
      >
        {config.buttonText || "Click Me"}
      </Button>
      {callResult && callResult !== '' && 
        <div style={{
          padding: config.TextboxPadding + 'px', 
          fontSize: config.TextboxFontSize + 'pt',
          color: config.TextboxTextColor,
          textAlign: config.TextboxAlign,
          background: config.TextboxBackground,
          overflowX: 'hidden', 
          overflowY: 'auto-scroll', 
          whiteSpace: 'pre-wrap'
        }}>
          
          <pre className="px-2 py-1 font-normal text-xs text-red-500" style={{whiteSpace: 'pre-wrap'}}>
            <h1>{callResult}</h1>
          </pre>
        </div>
      }
    </div>


  );
}

export default App;

