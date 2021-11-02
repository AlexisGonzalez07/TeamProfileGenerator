const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office_number) {
    super(name, id, email);
    this.office_number =office_number;
  }

  getRole() {
    console.log(`Role: Manager`)
    return 'Manager'
  }

  getNumber() {
    return this.office_number
  }
  }

  module.exports = Manager