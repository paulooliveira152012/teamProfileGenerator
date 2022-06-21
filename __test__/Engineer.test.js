const Engineer = require('../lib/Engineer');

test("get github", () => {
    const testValue = 'Larissa';
    const e = new Engineer("Larissa", 1, "larissa@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Larissa", 1, "larissa@gimail.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHub";
    const e = new Engineer("Larissa", 1, "larissa@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });