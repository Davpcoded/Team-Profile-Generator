const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, department, github) {
    super(name, id, email);
    this.department = department;
    this.github = github;
  }

  getDepartment() {
    return this.department;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
