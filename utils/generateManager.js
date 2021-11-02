function generateManager(data) {
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.getRole()}</h5>
      <p class="card-text">Name: ${data.getName()}</p>
      <p class="card-text">Email: ${data.getEmail()}</p>
      <p class="card-text">Office Number: ${data.getNumber()}</p>
    </div>
  </div>`
}

module.exports = generateManager;