//const generateEngineer = require("./generateEngineer");
//const generateIntern = require("./generateIntern");
//const generateManager = require("./generateManager");
const array = [];

function generateIntern(data) {
  let internData=  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.getRole()}</h5>
    <p class="card-text">Name: ${data.getName()}</p>
    <p class="card-text">Email: ${data.getEmail()}</p>
    <p class="card-text">School: ${data.getSchool()}</p>
  </div>
</div>`
array.push(internData);
}

function generateEngineer(data) {
  let engineerData = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.getRole()}</h5>
    <p class="card-text">Name: ${data.getName()}</p>
    <p class="card-text">Email: ${data.getEmail()}</p>
    <p class="card-text">School: ${data.getGithub()}</p>
  </div>
</div>`
array.push(engineerData);

}

function generateManager(data) {
  let managerData = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.getRole()}</h5>
    <p class="card-text">Name: ${data.getName()}</p>
    <p class="card-text">Email: ${data.getEmail()}</p>
    <p class="card-text">Office Number: ${data.getNumber()}</p>
  </div>
</div>`
array.push(managerData);

}


function generateHTML() {
  const joinedArr = array.join('')
return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="./assets/css/style.css" />
  <title>Git it Done</title>
</head>
<body>
${joinedArr}
</body>
`
};

module.exports = {generateHTML, generateIntern, generateEngineer, generateManager};