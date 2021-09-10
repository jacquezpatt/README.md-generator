const fs = require('fs');
const inquirer = require('inquirer');

const renderTitle = (title) => {
return `# ${title}`
};

const renderDescr = () => {
return `## Desciption
${description}`
};

const renderContent = () => {
return `## Table of Contents
    - [${content}](Contains-the-html-page-for-the-generator.)
    - [${content}](Contains-a-screenshot-of-the-assignment.)
    - [${content}](Contains-the-javascript-file.)
    - [${content}](Contains-the-stylesheet.)`
};

const renderInstall = () => {
return `## Istallation Instructions
${install}`
};

const renderUsage = () => {
return `## Usage 
${usage}`
};

const renderLicense = () => {
return
};

const renderContr = () => { 
return `## Contribution
${contribution}`
};

const renderTests = () => {
return `## Test
${tests}`
};

const renderQuests = () => {
return `## Questions
${questions}`
};


inquirer.prompt([
    {
        type:'input',
        message:'Enter Project Title',
        name: 'title'
    },
    {
        type:'input',
        message:'Enter a brief description',
        name: 'description'
    },
    {
        type:'input',
        message:'Enter table of contents',
        name: 'content'
    },
    {
        type:'input',
        message:'Enter install instructions',
        name: 'install'
    },
    {
        type:'input',
        message:'Enter usage info',
        name: 'usage'
    },
    {
        type:'checkbox',
        choices:['badge1', 'badge2', 'badge3'],
        name: 'license'
    },
    {
        type:'input',
        message:'Enter contribution info',
        name: 'contribution'
    },
    {
        type:'input',
        message:'Enter testing data',
        name: 'tests'
    },
    {
        type:'input',
        message:'Enter gitHub username & email address',
        name: 'questions'
    }
]).then(({ title, description, content, install, usage, license, contribution, tests, questions}) => {
renderTitle(title);
renderDescr(description);
renderContent(content);
renderInstall(install);
renderUsage(usage);
renderLicense(license);
renderContr(contribution);
renderTests(tests);
renderQuests(questions);
});