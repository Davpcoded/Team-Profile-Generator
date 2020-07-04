const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, department, github) {
    super(name, id, email);
    this.department = department;
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getDepartment() {
    return this.department;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
