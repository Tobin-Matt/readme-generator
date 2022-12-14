// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// 'MIT', 'Apache', 'GPL', 'BSD'
function renderLicenseBadge(license) {
  switch (license) {
    case 'None':
      return ``;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    default:
      return `license not found`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return ``;
    case 'MIT':
      return `(https://opensource.org/licenses/MIT)`;
    case 'Apache':
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL':
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD':
      return `(https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return `license not found`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}\n

## Table of Contents
[Description](#description)
[License](#license)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Description\n
${data.description}\n

## License\n
${renderLicenseSection(data.license)}\n

## Installation\n
${data.install}\n

## Usage\n
${data.usage}\n

## Contributing\n
${data.contribution}\n

## Tests\n
${data.test}\n

## Questions\n
Click on my GitHub username to view my profile: ${data.github} - https.//github.com/${data.github}\n
If you would like to reach me with additional questions email me at: ${data.email}\n
`;
}

module.exports = generateMarkdown;
