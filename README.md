# README Generator
Creates a professional README markdown file when a user inputs information in the Command Line Interface.

## Project Description
This application was made so that a user could easily and quickly create a README file for their project repo. The application was created using JavaScript only. Multiple javascript files were used to make the application functional. 
The index.js file holds the prompts that the user will answer to populate the data into the README file. It has the function to write the new README file and to initialize the application by starting the prompts for the user to answer. Most importantly it contains the functions that includes the needed modules. These modules are the Inquirer 8.2.4, the standard node.js file system and the generateMarkdown.js module. 
The generateMarkdown.js contains the code to create and set the structure of the README file. Included is also the code that will dynamically create a license badge and link based on the users selection in the given prompt. Lastly, at the end of the file is the export function that allows us to use this file in our index.js file.
For the user to invoke the application they will need to follow the steps below:
* Open their terminal
* Navigate into the directory that holds the index.js file
* Input the following command "node ." or "node index.js"
* The promts will then be presented one at a time
* Input the necessary information for each prompt and hit Enter/Return
* When prompted to select a license the user can use the arrow keys on their keyboard to switch between the options and use Enter/Return to select the license they want
* Once all prompts are answered then a message will be logged to the console that reads "README generated!"

The user should then see a new README.md file in the same directory they are currently in with all the information they provided. When the user opens the preview view of the file then they see it formatted correclty and with a table of contents that will help navigate the file.

## Walkthrough of README Generator
Below is a video of a user invoking the application, inputting information to each prompt and viewing the generated README file to check that all formatting is correct with functional links.

https://user-images.githubusercontent.com/112632434/207702992-d740f335-3bf9-41b8-82b7-e554a57d67e4.mp4



