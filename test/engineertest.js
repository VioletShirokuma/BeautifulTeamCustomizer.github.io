const Engineer = require("../lib/Engineer");

test("Retrieves github account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Nen", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Nen", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});



test("Retrieves github username thru getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Nen", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});