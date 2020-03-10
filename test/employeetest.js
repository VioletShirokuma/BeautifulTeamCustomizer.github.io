const Employee = require("../lib/Employee");

test("create employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("sets name", () => {
  const name = "Lana";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("sets the ID", () => {
  const testValue = 100;
  const e = new Employee("Nen", testValue);
  expect(e.id).toBe(testValue);
});



test("sets the email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Nen", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Retrieves name()", () => {
  const testValue = "Lana";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Retreives ID with getId()", () => {
  const testValue = 100;
  const e = new Employee("Nen", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Retrieves email with getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Nen", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns employee", () => {
  const testValue = "Employee";
  const e = new Employee("Lana", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});