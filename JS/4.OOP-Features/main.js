class User{
    constructor(_name, _surname, _age, _height, _weight){
        this.name = _name;
        this.surname = _surname;
        this.age = _age;
        this.height = _height;
        this.weight = _weight;
    }

    getName(){
        return this.name;
    }

    getFullInformation(){
        return `${this.name} ${this.surname} ${this.age} ${this.height} ${this.weight}`;
    }
}


class Student extends User{
    constructor(_name, _surname, _age, _height, _weight, _university){
        super(_name, _surname, _age, _height, _weight);
        this.university = _university;
    }

    getUniversityName(){
        return this.university;
    }
}

const studentInfo = new Student("Muhammed", "Gardashov", 20, 185, 95, "Azerbaijan State Oil and Industrial University");
// console.table(studentInfo);
// console.table(studentInfo.getFullInformation());