class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
class Employee extends Person {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
// CAN'T ACCESS DIRECTLY TO DEPT PROPERTY
// console.log(`Dept value: ${salesEmployee.dept}`)
// CANNOT CHANGE THE VALUE OF READONLY PROPERTY
// salesEmployee.id = "fidel" 
let data = [new Person("bsmith", "Bob Smith", "London"),
    new Employee("fvega", "Fidel Vega", "Sales", "Paris")];
data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    }
});
