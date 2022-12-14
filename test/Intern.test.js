///Linking intern to test, requiring intern file///
const Intern = require('../lib/Intern');
console.log(Intern);

test("create school via constructor", () => {
    const testValue = "ESU";
    const employeeInstance = new Intern("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Intern");
    expect(employeeInstance.school).toBe(testValue);
});

test("create intern object", () => {
    const testValue = "Intern";
    const employeeInstance = new Intern("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Intern");
    expect(employeeInstance.school).toBe(testValue);
});

test("getRole", () => {
    const testValue = "Intern";
    const employeeInstance = new Intern("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Intern");
    expect(employeeInstance.getRole).toBe(testValue);
});