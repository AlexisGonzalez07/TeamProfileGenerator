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
  <link rel='stylesheet' href="./assets/css/reset.css">
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./assets/css/style.css" />
  <title>Team Profiles</title>
</head>
<body>
<header class="jumbotron jumbotron-fluid custom-jumbotron">
<div class="container text-center">
  <h1>Our Current Team Profiles</h1>
  <!-- <h2>Current Time &amp; Date: <br /> <span id="time-display">00:00:00</span></h2> -->
</div>
</header>
<main class="container-fluid">
<div class="col-12 col-md-12 col-lg-12">
<div class="row">
${joinedArr} 
</div>
</div>
</main>
</body> 
`
};

module.exports = {generateHTML, generateIntern, generateEngineer, generateManager};