const Intern = require("../lib/Intern");

test("sets school", () => {
  const testValue = "UW";
  const e = new Intern("Nen", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});



test("getRole() returns intern", () => {
  const testValue = "Intern";
  const e = new Intern("Nen", 1, "test@test.com", "UW");
  expect(e.getRole()).toBe(testValue);
});




test("Retrieves school thru getSchool()", () => {
  const testValue = "UW";
  const e = new Intern("Nen", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});