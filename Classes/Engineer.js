const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github =github;
  }

  getRole() {
    console.log(`Role: Engineer`)
    return 'Engineer'
  }

  getGithub() {
    console.log(`Github: ${this.github}`)
    return this.github
  }
  }

  module.exports = Engineer