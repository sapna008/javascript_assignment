// Constructor function Person
function Person(name, age) {
    // Properties
    this.name = name;
    this.age = age;
  }
  
  // Method introduce on Person.prototype
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // Constructor function Employee inheriting from Person
  function Employee(name, age, jobTitle) {
    // Call Person constructor
    Person.call(this, name, age);
    // Additional property
    this.jobTitle = jobTitle;
  }
  
  // Inherit from Person.prototype
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  // Method work on Employee.prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  // Demonstration
  // Create Person instance
  let person = new Person("sapna sarkar", 23);
  // Create Employee instance
  let employee = new Employee("ruhi roy", 25, "Software Engineer");
  
  // Call introduce on both instances
  person.introduce();
  employee.introduce();
  
  // Call work on Employee instance
  employee.work();