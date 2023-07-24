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
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
