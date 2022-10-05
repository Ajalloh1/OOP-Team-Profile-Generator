//linking employee tes file///
const Employee = require("../lib/Employee");

text("Create new employee object", () => {
    const employeeInstance = new Employee();
    expet(typeof (employeeInstance)).toBe("object");
});

test("gets employee name", () => {
    const name = "Ahmadu";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
});

test("gets employee Id", () => {
    const id = 10;
    const employeeInstance = new Employee("Ahmadu", id);
    expect(employeeInstance.id).toBe(id);
});

test("gets employee email", () => {
    const email = "ahmadughj@jalloh.com";
    const employeeInstance = new Employee("Ahmadu", 10, email);
    expect(employeeInstance.email).toBe(email);
});

test("gets name via getName method", () => {
    const testValue = "Ahmadu"
    const employeeInstance = new Employee(testValue);
    expect(employeeInstance.getName).toBe(testName);
});

test("gets id via getId method", () => {
    const testId = 10;
    const employeeInstance = new Employee("Ahmadu", testId);
    expect(employeeInstance.getId).toBe(testId);
});

test("gets email via getEmail method", () => {
    const testEmail = "ahmadughj@jalloh.com";
    const employeeInstance = new Employee("Ahmadu", 10, testEmail);
    expect(employeeInstance.getEmail).toBe(testEmail);
});

test("gets role via getRole method", () => {
    const testValue = "Employee";
    const employeeInstance = new Employee("Ahmadu", 10, "ahmadughj@jalloh.com", Employee);
    expect(employeeInstance.getRole).toBe(testValue);
});