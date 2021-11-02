const inquirer = require('inquirer');
const fs = require('fs')
const {generateHTML,generateIntern, generateEngineer, generateManager} = require("./utils/generateHTML");
const Engineer = require('./Classes/Engineer');
const Intern = require('./Classes/Intern');
const Manager = require('./Classes/Manager')
const engineerQuestions = require('./Questions/engineerQuestions')
const managerQuestions = require('./Questions/managerQuestions')
const internQuestions = require('./Questions/internQuestions');
const indexQuestions = require('./Questions/indexQuestions');
const { generate } = require('rxjs');


function writeToFile(fileName) {
    fs.writeFile(fileName, generateHTML(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(managerQuestions)
//     .then(answer => {
//         console.log(answer);
//         const managerOne= new Manager(answer.name, answer.id, answer.email,answer.office_number);
//         inquirer.prompt(indexQuestions)
//     })
// }


async function addEngineer() {
    const response = await inquirer.prompt(engineerQuestions);

    const engineer = await new Engineer(response.name, response.id, response.email,response.github);

    await generateEngineer(engineer)
    renderChoice()
}

async function addIntern() {
    const results = await inquirer.prompt(internQuestions);

    const intern = await new Intern(results.name, results.id, results.email, results.school);

    await generateIntern(intern);

    renderChoice()
}


async function renderChoice()  {
    const choice = await inquirer.prompt(indexQuestions)
    console.log(choice);
    // requires a return
    switch(choice.select){
        case 'Add Engineer':
        addEngineer();
          break;
    case 'Add Intern':
          addIntern();
          break;
    case 'Finish Team':
        //   generateHTML();
          writeToFile('index.html')
          break;
    default: 
          renderChoice();
          return 'Please select an option';
  }};
  
  async function init() {
    const answer = await inquirer.prompt(managerQuestions);

    const manager = await new Manager(answer.name, answer.id, answer.email,answer.office_number);
    await generateManager(manager);

    renderChoice()
}

init();
  