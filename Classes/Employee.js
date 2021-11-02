class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name,id,email) {
      this.name = name;
      this.id = id;
      this.email = email
    }
  
    getName() {
      console.log(`Name: ${this.name}`)
      return this.name
    }

    getID() {
      console.log(`Name: ${this.id}`)
      return this.id
    }

    getEmail() {
      console.log(`Name: ${this.email}`)
      return this.email
    }
    
    getRole() {
      console.log(`Role: Employee`)
      return 'Employee'
    }
  }
  
  module.exports = Employee

  // Team Manager: name, employee ID, email, office number
  // Engineer: name, ID, email, github username
  // 