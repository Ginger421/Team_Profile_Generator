// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const profile = () => {  
inquirer
.prompt([
  { type: 'input',
  message: "Team manager's name?",
  name: "managerName"
  },
  {
    type: 'input',
    message: 'Manager id?',
    name: 'managerId'
  },
  {
   type: 'input',
   message: 'Manager email address?',
   name: 'managerEmail'
  },
  {
    type:'input',
    message: 'Office number?',
    name: 'managerOfficeNum'
  }


} 
  {
   type: 'input',
   message: "What is the engineer's name?",
   name: 'engiName'
  },
  {
    type: 'input',
    message: ""
  }

])

//name, role, email
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
