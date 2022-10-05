///Linking ngineer to test, requiring engineer file///
const Engineer = require('../rsc/Engineer');

test("sets GitHub via constructor", () => {
    const testValue = "GitHub";
    const employeeInstance = new Engineer("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Engineer");
    expect(employeeInstance.GitHub).toBe(testValue);
});

test("test GitHub", () => {
    const testValue = "Engineer";
    const employeeInstance = new Engineer("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Engineer");
    expect(employeeInstance.getRole).toBe(testValue);
});

test("test GitHubUser", () => {
    const testValue = "GitHubUser";
    const employeeInstance = new Engineer("Ahmadu Jalloh", 10, "ahmadughj@jalloh.com", testValue, "Engineer");
    expect(employeeInstance.getGitHub).toBe(testValue);
});




