import inquirer from "inquirer";
import fs from "fs/promises";

// prompts the user for info about their project
let {title, description, install, usage, license, contribute, tests, username, email} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please type the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please type a description of your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please type installation instructions for your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please type usage information for your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the license used for your project:',
            choices: [
                'The MIT License',
                'Mozilla Public License 2.0',
                'Eclipse Public License 1.0',
                'N/A',
            ],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please type contribution guidelines for your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please type testing instructions for your project:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address where you can be reached for further questions about your project:',
        },
        
    ]);

// selects licenseBadge to display depending on user choice
function licenseBadge(){
    if (license === 'The MIT License'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }else if(license === 'Mozilla Public License 2.0'){
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }else if(license === 'Eclipse Public License 1.0'){
        return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    }else{
        return
    }
}

const licenseDotText = "`LICENSE.txt`";

// the template layout for the README to be generated
const readmeText = 
`${licenseBadge()}

# ${title}

## About the Project

${description}

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Installation

${install}

## Usage

${usage}

## License

Distributed under ${license}. See ${licenseDotText} for more information.

## Contributing

${contribute}

## Tests

${tests}

## Questions

For further information about this project, please contact me through GitHub at https://github.com/${username}, or you can send me an email at ${email}.`;

// writes the new README to disk
fs.writeFile("./output/README.md", readmeText);

