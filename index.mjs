import inquirer from "inquirer";
import fs from "fs/promises";

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