const Employee = require("../lib/Employee");

text("Create new employee object", () => {
    const employeeInstance = new Employee();
    expet(typeof (employeeInstance)).toBe("object");
});