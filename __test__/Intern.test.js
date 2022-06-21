const Intern = require("../lib/Intern");

test("get school through constructor", () => {
  const testValue = "Rutgers";
  const e = new Intern("Larissa", 1, "larissa@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns 'Intern'", () => {
  const testValue = "Intern";
  const e = new Intern("Larissa", 1, "larissa@gmail.com", "Rutgers");
  expect(e.getRole()).toBe(testValue);
});

test("get school through getSchool()", () => {
  const testValue = "Rutgers";
  const e = new Intern("Larissa", 1, "larissa@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});