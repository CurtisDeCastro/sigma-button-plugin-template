# Sigma Button Plugin

This is a plugin for Sigma Computing that allows you to customize a button in your Sigma worksheets and configure the editor panel.

## Getting Started

To get started, you'll need to have Node.js and npm installed on your machine. If you don't have these installed, you can download them from [here](https://nodejs.org/en/download/).

Once you have Node.js and npm installed, you can download and run the create-react-app by running the following commands in your terminal:

In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Code Execution

The provided text input field facilitates the addition of JavaScript code for execution. To return values to the textbox situated beneath the button, invoke the `Return()` function.

In your code, you can reference Sigma Data as 'sigmaData'. It manifests as an object with keys corresponding to each column name linked in the 'Source' section. Note that column names are converted to lowercase. For instance, a column named `MARCH_FORECAST` can be accessed as `sigmaData.march_forecast`, which returns an array of values, each representing a row of that column, sorted as displayed in the table. It is advisable to specify a sort order in the source table.

The code must be composed in basic JavaScript. It is dynamically injected into the 'onClick' function of the button, and should be authored as if it were the code within the scope of that function.

Prior to the plugin deployment, you have the option to install NPM packages which will then be accessible to the code provided in this text box. This feature enables you to augment the functionality of your button with external libraries.

Be aware that the code execution environment is sandboxed for security purposes. Consequently, certain JavaScript features or APIs may not be accessible.

It is crucial to rigorously test your code before deploying the plugin to ensure it operates as anticipated. If your code generates errors, they will appear in the iframe containing the plugin. Ensure thorough testing before transitioning code to production. 


## Editor Panel Configuration Options

The plugin allows you to configure the editor panel in your Sigma worksheets. Here are the available options:

- `actions`: This is a group type option that contains the `code` option.
- `code`: This option allows you to set the code that will be executed when the button is clicked. The default value is "console.log(config)".
- `data`: This is an element type option.
- `Inputs`: This is a column type option that allows multiple inputs and accepts 'datetime', 'integer', 'text', 'boolean', 'number' types.
- `ButtonFormat`: This is a group type option that contains the button styling options.
- `buttonText`, `buttonTextFont`, `buttonTextSize`, `buttonTextColor`, `buttonColor`, `buttonMargin`, `buttonPadding`, `buttonBorderRadius`: These options allow you to customize the button's appearance. Please refer to the Button Configuration Options section for more details.
- `TextboxFormat`: This is a group type option that contains the textbox styling options.
- `TextboxFontSize`, `TextboxPadding`, `TextboxTextColor`, `TextboxAlign`, `TextboxBackground`: These options allow you to customize the textbox's appearance.

Please note that all these options are optional. If you do not provide a value for an option, the default value will be used.

## Button Configuration Options

This plugin allows you to customize a button in your Sigma worksheets. Here are the available options:

- `buttonText`: This option allows you to set the text that appears on the button. 
    The default value is "Click Me". You can provide any string value as the button text.

- `buttonTextFont`: This option allows you to set the font of the button text. 
    The default value is "Arial". You can provide any valid CSS font name.

- `buttonTextSize`: This option allows you to set the size of the button text. 
    The default value is "16". You can provide any valid CSS font size value (in PX).

- `buttonTextColor`: This option allows you to set the color of the button text. 
    The default value is "000000" (black). You can provide any valid CSS color value (in Hex).

- `buttonColor`: This option allows you to set the color of the button. 
    The default value is "ffffff" (white). You can provide any valid CSS color value (in Hex).

- `buttonMargin`: This option allows you to set the margin around the button. 
    The default value is "10". You can provide any valid CSS margin value (in EM).

- `buttonPadding`: This option allows you to set the padding inside the button. 
    The default value is "0". You can provide any valid CSS padding value (in EM).

- `buttonBorderRadius`: This option allows you to set the border radius of the button. 
    The default value is "5". You can provide any valid CSS border radius value (in PX).

Please note that all these options are optional. If you do not provide a value for an option, the default value will be used.

## Textbox Configuration Options

This plugin allows you to customize a textbox in your Sigma worksheets. Here are the available options:

- `TextboxFontSize`: This option allows you to set the font size of the textbox. 
    The default value is "10". You can provide any valid CSS font size value (in PT).

- `TextboxPadding`: This option allows you to set the padding inside the textbox. 
    The default value is "10". You can provide any valid CSS padding value (in PX).

- `TextboxTextColor`: This option allows you to set the color of the textbox text. 
    The default value is "white". You can provide any valid CSS color value.

- `TextboxAlign`: This option allows you to set the text alignment in the textbox. 
    The default value is "center". You can provide any valid CSS text alignment value.

- `TextboxBackground`: This option allows you to set the background color of the textbox. 
    The default value is "none". You can provide any valid CSS color value.

Please note that all these options are optional. If you do not provide a value for an option, the default value will be used.
