const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}
const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Programmer";

//This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "programmer" },
})

harry1.changeName("Harry2");
// console.log(harry1);

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.slogan = function () {
    return `This company is the best. Regards ${this.name}`;
}

let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan());

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);