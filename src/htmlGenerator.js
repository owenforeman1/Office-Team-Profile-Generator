//manager
const managerCard = function (manager) {
  return `<div class="card " style="width: 18 rem">
  <h4 class="card-header">
    ${manager.name} <br /> <br /> Manager
  </h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${manager.id} </li>
    <li class="list-group-item">Email ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
  </ul>
</div>;`;
};

//engineer
const engineerCard = function (engineer) {
  return `<div class="card " style="width: 18 rem">
  <h4 class="card-header">
    ${engineer.name} <br /> <br /> Engineer
  </h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID  ${engineer.id}</li>
    <li class="list-group-item">Email ${engineer.email}</li>
    <li class="list-group-item">GitHub ${engineer.github}</li>
  </ul>
</div>`;
};

//intern
const internCard = function (intern) {
  return `<div class="card " style="width: 18 rem">
  <h4 class="card-header">
    ${intern.name} <br /> <br /> Intern
  </h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID  ${intern.id}</li>
    <li class="list-group-item">Email  ${intern.email}</li>
    <li class="list-group-item">School  ${intern.school}</li>
  </ul>
</div>`;
};

module.exports = {
  managerCard,
  engineerCard,
  internCard,
};
