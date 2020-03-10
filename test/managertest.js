const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");



test("sets office number", () => {
  const testValue = 100;
  const e = new Manager("Nen", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});



test("getRole() returns manager", () => {
  const testValue = "Manager";
  const e = new Manager("Nen", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});




test("Retrieves office number with getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Nen", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});