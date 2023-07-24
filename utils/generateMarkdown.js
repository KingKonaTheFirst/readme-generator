// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license !== "None") {
    badge =
      "![Badge for License](https://shields.io/badge/license-" +
      license +
      "-purple.svg)";
  }
  return badge;
}
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "https://mit-license.org/";
      break;
    case "Apache":
      link = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      link = "";
      break;
  }
  return link;
}

function  renderLicenseSect(license) {
  let lSect = "";
  let lLink = renderLicenseLink(license)
  if(license !== 'None') {
      lSect = lLink;
  }
  return lSect;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Descriptions
  ${data.description}

  ## Table of Contents
*  [Introduction](#introduction)
*  [Installation](#installation)
*  [Usage](#usage)
*  [Contributing](#contributors)
*  [License](#license)
*  [Acknowledgments](#acknowledgments)

## Installation
${data.instal}

## usage
${data.usage}

## License

${renderLicenseSect(data.license)}

## Contributors


${data.contribute}

## Tests

${data.test}

## Contact me
https.github.com/${data.username}
${data.email}


`;
}

module.exports = generateMarkdown;
