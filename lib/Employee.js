//class employee constructor//
class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    // get name fucntion to return object name//
    getName() {
        return this.name;
    }
    getId() {

        // get id fucntion to return object id//
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title;
    }
}
//export///
module.exports = Employee;