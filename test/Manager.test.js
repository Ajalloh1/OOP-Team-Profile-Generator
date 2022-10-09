///Linking manager to test, requiring mnager file///
const Manager = require('../lib/Manager');

test("set office number", () => {
    const testValue = "20";
    const employeeInstance = new Manager("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Manager");
    expect(employeeInstance.officeNumber).toBe(testValue);
});

test("setRole object", () => {
    const testValue = "Manager";
    const employeeInstance = new Manager("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", 20, "Manager");
    expect(employeeInstance.getRole).toBe(testValue);
});

test("get officeNumber", () => {
    const testValue = "20";
    const employeeInstance = new Manager("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Manager");
    expect(employeeInstance.getOficeNumber).toBe(testValue);
});




