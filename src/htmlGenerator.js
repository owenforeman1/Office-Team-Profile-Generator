const htmlPage = function (teamCard) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  <link rel="stylesheet" href="./dist/style.css">
  <title>Team Page</title>
</head>
<header >
  <div class="jumbotron jumbotron-fluid" style="    background-color: powderblue;">
  <div class="container ">
    <h1 class="display-4" style="text-align: center; ">Office Team</h1>
  </div>
</header>

<body>
${teamCard}
</body>

</html>`;
};

//manager
const managerCard = function (manager) {
  return `<div class="card " style="width: 18 rem">
  <h4 class="card-header" style="background-color: cadetblue;">
    ${manager.name} <br /> <br /> Manager
  </h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${manager.id} </li>
    <li class="list-group-item">Email <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
  </ul>
</div>;`;
};

//engineer
const engineerCard = function (engineer) {
  return `<div class="card " style="width: 18 rem">
  <h4 class="card-header" style="background-color: cadetblue;">
    ${engineer.name} <br /> <br /> Engineer
  </h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID  ${engineer.id}</li>
    <li class="list-group-item">Email  <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">GitHub <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
  </ul>
</div>`;
};

//intern
const internCard = function (intern) {
  return `<div class="card " style="width: 18 rem">
  <h4 class="card-header" style="background-color: cadetblue;">
    ${intern.name} <br /> <br /> Intern
  </h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID  ${intern.id}</li>
    <li class="list-group-item">Email   <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School  ${intern.school}</li>
  </ul>
</div>`;
};

module.exports = {
  managerCard,
  engineerCard,
  internCard,
  htmlPage,
};
