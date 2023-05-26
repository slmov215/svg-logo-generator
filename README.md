# svg-logo-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This week, I was tasked in creating an application that allows the user to create simple logos for their project(s) so that they don't have hire a graphic designer. This application utilizes inquirer to prompt the user within the command line on how they would like their logo to look like. Once completed, a SVG file will be written. Withing this application, it utilizes one test suite, with four tests. The test simply tests that the code base is delivering back correct shapes and colors. As for the future development on this application, I would like to implement more error handling (SVG colors), additional unit testing, and adding more polygons and font styles for users to choose from.   

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)


## Installation

This application requires the user to download node.js v16+, inquire v8.2.4 and jest v29.5.0

To install the repo, you will first need to run the command in the terminal :

```
git clone http://git@github.com:slmov215/svg-logo-generator.git
```

To install inquire, run the command in the terminal :

```
npm i inquirer@8.2.4
```

To install jest, run the command in the terminal :

```
npm install --save-dev jest
```


## Usage

To run this application, use the command line to navigate to the directory of the application, install all dependencies listed above and then type the command 'node index.js'. A series of prompt will be needed to answer and once all the prompts have been answered, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file.

![Logo Demo](./examples/circle-logo.svg)

View the link for a 
[Walkthrough Video](https://drive.google.com/file/d/17eAd3h0ufud0iXkqekQUAdK4lf_EfU5I/view)

![Preview](./assests/Untitled_%20May%2025%2C%202023%2010_06%20PM.gif)

## License 

Copyright @ MIT. All rights reserved.

Licensed under the MIT [License](https://opensource.org/licenses/MIT) 


## Contributing

The code used in this application for the basic shapes are found in MDN web docs [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes).

## Testing

To run tests, run these commands:

```
npm run test
```

### Questions

[Review my other projects on GitHub.](https://www.github.com/slmov215)

[Email me](mailto:slmov215@gmail.com) 