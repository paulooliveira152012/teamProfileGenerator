const Manager = require('../lib/Manager');

test("get office number", () => {
    const testValue = 10;
    const e = new Manager("Larissa", 1, "larissa@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Larissa", 1, "larissa@gimail.com", "10");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number through getOffice()", () => {
    const testValue = "10";
    const e = new Manager("Larissa", 1, "larissa@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });