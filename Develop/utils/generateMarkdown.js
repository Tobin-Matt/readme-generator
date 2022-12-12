// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// 'MIT', 'Apache', 'GPL', 'BSD'
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## License
    ${data.license}

    ## Description 
    ${data.description}

    ## Installation 
    ${data.install}

    ## Usage 
    ${data.usage}

    ## Contributing 
    ${data.contribution}

    ## Tests 
    ${data.test}

    ## Questions
    Follow this link to view my GitHub profile: https.//github.com/${data.github}
    If you would like to reach me with additional questions email me at: ${data.email}
  `;
}

module.exports = generateMarkdown();
