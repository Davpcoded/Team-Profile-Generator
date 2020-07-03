const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, department) {
    super(name, id, email);
    this.department = department;
  }

  getDepartment() {
    return this.department;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
