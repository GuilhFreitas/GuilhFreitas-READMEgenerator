import inquirer from "inquirer";
import fs from "fs/promises";

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
            default: 'N/A',
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


const licenseDotText = "`LICENSE.txt`";
let readmeText = 
`${licenseBadge}

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

${questions}`