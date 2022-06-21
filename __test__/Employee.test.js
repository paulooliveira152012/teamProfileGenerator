const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});


test("receives the value of name", () => {
    const name = "Larissa";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("receives the value of Id", () => {
    const testValue = 100;
    const e = new Employee("Larissa", testValue);
    expect(e.id).toBe(testValue);
  });

  test("receives the value of email", () => {
    const testValue = "larissa@gmail";
    const e = new Employee("Larissa", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  