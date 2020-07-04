const Engineer = require("../lib/Engineer");

test("Can set department via constructor", () => {
  const testValue = "department";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.department).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get department via getDepartment()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getDepartment()).toBe(testValue);
});
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", "front-end", testValue);
  expect(e.github).toBe(testValue);
});
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", "front-end", testValue);
  expect(e.getGithub()).toBe(testValue);
});
