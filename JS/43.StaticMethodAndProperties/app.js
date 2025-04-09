// ! Static keyword

// class Company{
//     static companyRules = "Company Rules";
//     static companyPolicy = "Company Policy";
//     static companyOpeningHours = "Company opening hours";
//     static employees = [];

//     addEmployee(employee){
//         Company.employees.push(employee);
//     }
//     getEmployees(){
//         return this.employees;
//     }
//     static getCompanyRules(){
//         return Company.companyRules;
//     }
// }


// class Employee{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         console.log(this.name);
//     }
//     chageName(newName){
//         this.name = newName;
//     }
// }


// const company = new Company();
// console.log(company.companyRules);          // ? undefined
// console.log(company.getCompanyRules());

// const company = new Company();
// company.addEmployee(new Employee("Metin"))
// const company2 = new Company();
// company2.addEmployee(new Employee("Muhammed"));
// console.log(Company.employees);



// ! Built in static methods in Javascript
// const obj = Object.create({}, {
//     name: {
//         value: "some value",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });
// console.log(obj);
// obj.name = "Muhammed";
// console.log(obj);



// ! Date
// const date = new Date();
// console.log(date.now);                // ? undefined 
// console.log(Date.now());              // ? 1727941745346