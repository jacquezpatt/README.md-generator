const fs = require('fs');
const inquirer = require('inquirer');

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
        message:'select a badge',
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
        message:'Enter contact info',
        name: 'questions'
    }
])