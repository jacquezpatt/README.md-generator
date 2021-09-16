const fs = require('fs');
const inquirer = require('inquirer');
const MITbadge = ('[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)');
const Apachebadge = ('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
const BOOSTbadge = ('[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)BSD')
const outputREADME = (readme) => {
fs.writeFile('newREADME.md', readme, (err) => {
if (err) console.log(err);
});
};

const renderReadMe = (...baseReadMe) => { 
return baseReadMe.join("\n\n");
}

const renderTitle = (title) => {
    return `# ${title}`
};

const renderDescr = (description) => {
    return `## Desciption
${description}`
};

const renderContent = (content1, content2, content3, content4) => {
    return `## Table of Contents
    - [${content1}](Contains-the-html-page-for-the-generator.)
    - [${content2}](Contains-a-css-stylesheet.)
    - [${content3}](Contains-the-javascript-file.)
    - [${content4}](Contains-the-assets-used-in-the-project.)`
};

const renderInstall = (install) => {
    return `## Istallation Instructions
${install}`
};

const renderUsage = (usage) => {
    return `## Usage 
${usage}`
};

const renderLicense = (license) => {
    return `##License
    ${license}`
};

const renderContr = (contribution) => {
    return `## Contribution
${contribution}`
};

const renderTests = (tests) => {
    return `## Test
${tests}`
};

const renderQuests = (questions) => {
    return `## Questions
${questions}`
};


inquirer.prompt([
    {
        type: 'input',
        message: 'Enter Project Title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a brief description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter HTML page title',
        name: 'content1'
    },
    {
        type: 'input',
        message: 'Enter stylesheet title',
        name: 'content2'
    },
    {
        type: 'input',
        message: 'Enter javascript title',
        name: 'content3'
    },
    {
        type: 'confirm',
        message: 'assets folder?',
        name: 'content4'
    },
    {
        type: 'input',
        message: 'Enter install instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter usage info',
        name: 'usage'
    },
    {
        type: 'checkbox',
        choices: ['MITbadge', 'Apachebadge', 'BOOSTbadge'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter contribution info',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter testing data',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter gitHub username & email address',
        name: 'questions'
    }
]).then(({ title, description, content1, content2, content3, content4, install, usage, license, contribution, tests, questions }) => {
    const baseTitle = renderTitle(title);
    const baseDescription = renderDescr(description);
    const baseContent1 = renderContent(content1, content2, content3, content4);
    const baseInstall = renderInstall(install);
    const baseUsage = renderUsage(usage);
    const baseLicense = renderLicense(license);
    const baseContribution = renderContr(contribution);
    const baseTests = renderTests(tests);
    const baseQuestions = renderQuests(questions);
    const baseReadMe = renderReadMe(baseTitle, baseDescription, baseContent1, baseInstall, baseUsage, baseLicense, baseContribution,
    baseTests, baseQuestions);
outputREADME(baseReadMe);
});