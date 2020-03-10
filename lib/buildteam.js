const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require('./Engineer');


const genCard = require('./carddesign');
const html = require("./generateHTML");
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require("inquirer");



let managerCard = "";
let engCard = "";
let internCard = "";
let teamCards = "";





let managerPrompt = () => {
    console.log(chalk.red.bgYellowBright.underline.bold("Build and customize your team."));
    return inquirer.prompt([{
                type: "input",
                name: "name",
                message: chalk.cyanBright("What is your Manager's Name?")
            },
            {
                type: "input",
                name: "id",
                message: chalk.magentaBright("What is your Manager ID?")
            },
            {
                type: "input",
                name: "email",
                message: chalk.redBright("What is your Manager's email?")
            },
            {
                type: "input",
                name: "officeNumber",
                message: chalk.blueBright("What is your Manager's office number?")
            }
        ]) 
        

        .then((data) => {
            let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            
            
            managerCard = genCard.man_card(newManager.name, newManager.id, newManager.email, newManager.officeNumber);
            teamCards += managerCard;

            chooseTeam();
        })

}





//customize team
const chooseTeam = () => {
    inquirer.prompt([{
            type: "list",
            name: "member",
            message: chalk.yellowBright("Select which team member you want to add."),
            choices: ["engineer", "Intern", "I dont want to add any more team members"]
        }])
        .then((data) => {

            if (data.member === "engineer") {
                buildEngineer();
            } else if (data.member === "Intern") {
                buildIntern();

            } else {

                console.log(chalk.magentaBright.bgWhiteBright.underline.bold("Check the Output folder for your custom team that you generated!"));
                const outputPage = html.generateHTML(teamCards);
                fs.writeFile("./output/newCustomTeam.html", outputPage, (err) => {
                    if (err) throw err;
                    //  
                });
            }
        })
}


//if intern option selected this customizes it
const buildIntern = () => {
    inquirer.prompt([{
                type: "input",
                name: "internName",
                message: chalk.cyanBright("What is your Intern's Name?")
            },
            {
                type: "input",
                name: "internId",
                message: chalk.magentaBright("What is your Intern's ID?")
            },
            {
                type: "input",
                name: "internEmail",
                message: chalk.redBright("What is your Intern's email?")
            },
            {
                type: "input",
                name: "internSchool",
                message: chalk.blueBright("Where did your Intern attend school?")
            }
        ])




        .then((data) => {
            let newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            


            internCard = genCard.genInternCard(newIntern.name, newIntern.id, newIntern.email, newIntern.school);
            teamCards += internCard;
            chooseTeam();
        })
}


// customizes engineer
const buildEngineer = () => {
    inquirer.prompt([{
                type: "input",
                name: "engineerName",
                message: chalk.cyanBright("What is your Engineer's Name?")
            },
            {
                type: "input",
                name: "engineerId",
                message: chalk.magentaBright("What is your Engineer's ID?")
            },
            {
                type: "input",
                name: "engineerEmail",
                message: chalk.redBright("What is your Engineer's email'?")
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: chalk.blueBright("What is your Engineer's Github username'?")
            }
        ])
        .then((data) => {
            let newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);

            engCard = genCard.genEngineerCard(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github);
            teamCards += engCard;

            chooseTeam();
        })
}

module.exports =
    managerPrompt,
    buildEngineer,
    buildIntern;