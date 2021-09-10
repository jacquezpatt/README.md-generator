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
    - [${content1}](Contains-the-html-page-for-the-generator.)
    - [${content2}](Contains-a-css-stylesheet.)
    - [${content3}](Contains-the-javascript-file.)
    - [${content4}](Contains-the-assets-used-in-the-project.)`
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
        message: 'Enter HTML page title',
        name: 'content 1'
    },
    {
        type:'input',
        message: 'Enter stylesheet title',
        name: 'content 2'
    },
    {
        type:'input',
        message: 'Enter javascript title',
        name: 'content 3'
    },
    {
        type:'checkbox',
        choices: 'Is there an assets folder',
        name: 'content 4'
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
]).then(({ title, description, content1, content2, content3, content4, install, usage, license, contribution, tests, questions}) => {
renderTitle(title);
renderDescr(description);
renderContent(content1);
renderContent(content2);
renderContent(content3);
renderContent(content4);
renderInstall(install);
renderUsage(usage);
renderLicense(license);
renderContr(contribution);
renderTests(tests);
renderQuests(questions);
});