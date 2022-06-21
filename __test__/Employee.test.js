const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    expect(Employee.name).toBe(this.name);
    expect(Employee.id).toBe(this.id);
    expect(Employee.email).toBe(this.email);
})


