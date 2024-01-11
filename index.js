// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const { makeBadge, ValidationError } = require('badge-maker')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            message: "Provide a short description explaining the the '30k-foot-view' of your project. Keep it short, there will be more room for you to describe your project.",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What was your motivation for building this project?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: "Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.'",
            name: 'why',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'solves',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'lessons',
        },
        {
            type: 'checkbox',
            message: 'If your README is long, add a table of contents to make it easy for users to find what they need. Include:',
            name: 'tableOfContents',
            choices: ["Installation", "Useage", "Credits", "License", "Badges", "Features", "Contribute", "Tests"]
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'useage',
        },
        {
            type: 'input',
            message: 'Provide screenshots by using the following syntax as an example:\n![alt text](./assets/images/screenshot.png)',
            name: 'screenshots',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'collaborators',
        },
        {
            type: 'input',
            message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
            name: 'thirdParty',
        },
        {
            type: 'input',
            message: 'If you followed tutorials, include links to those at this point.',
            name: 'tutorials',
        },
        {
            type: 'list',
            message: 'Does your project use a license? Please select one of the following: If you need help choosing a license, refer to [https://choosealicense.com/]',
            name: 'license',
            choices: [
            'No License',
            'Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'CC0','Attribution 4.0 International',
            'Attribution-ShareAlike 4.0 International',
            'Attribution-NonCommercial 4.0 International',
            'Attribution-NoDerivates 4.0 International',
            'Attribution-NonCommmercial-ShareAlike 4.0 International',
            'Attribution-NonCommercial-NoDerivatives 4.0 International',
            'Eclipse Public License 1.0',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'Hippocratic License 2.1',
            'Hippocratic License 3.0',
            'IBM Public License Version 1.0',
            'ISC License (ISC)',
            'MIT License',
            'Mozilla Public License 2.0',
            'Attribution License (BY)',
            'Open Database License (ODbL)',
            'Public Domain Dedication and License (PDDL)',
            'Perl License',
            'Artistic License 2.0',
            'SIL Open Font License 1.1',
            'Unlicense',
            'Do What the Fuck You Want to Public License',
            'zlib/libpng License'
        ]
        },
        {
            type: 'input',
            message: "Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/).",
            name: 'badges',
        },
        {
            type: 'input',
            message: "If your project has a lot of features, list them here.",
            name: 'features',
        },
        {
            type: 'input',
            message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
            name: 'contribute',
        },
        {
            type: 'input',
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
            name: 'tests',
        },
        {
            type: 'input',
            message: "Enter your GitHub username.",
            name: 'github',
        },
        {
            type: 'input',
            message: "Enter your e-mail address.",
            name: 'email',
        }
    ])

// TODO: Create a function to write README file
.then((data) => {
    const fileName = 'README.md'
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
