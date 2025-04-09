class Student{
    constructor(_name, _surname){
        this.name = _name;
        this.surname = _surname;
    }

    getFullName(){
        return `${this.name} ${this.surname}`;
    };
};

let studentInfo = new Student("Muhammed", "Gardashov");
console.log(studentInfo);
console.log(studentInfo.getFullName())


class Teacher extends Student{
    constructor(_name, _surname, _group){
        super(_name, _surname);
        this.group = _group;
    }
}

// let teacherInfo = new Teacher("Metin", "Gardashov", "Teacher");
// console.log(teacherInfo);


class Director extends Teacher{
    constructor(_name, _surname, _group, _salary){
        super(_name, _surname, _group);
        this.salary = _salary;
    }
}

// let directorInfo = new Director("Musa", "Budagov", "Director", 1000);
// console.log(directorInfo);