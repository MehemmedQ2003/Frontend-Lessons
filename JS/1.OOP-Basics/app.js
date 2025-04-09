function createStudent(_name, _surname, _age){
    return{
        name:_name,
        surname: _surname,
        age:_age,
        getName(){
            return this.name;
        }
    }
}

// let student01 = createStudent("Muhammed", "Gardashov", 20);
// console.log(student01);
// console.log(student01.getName())



function StudentConstructor(_name, _surname, _age){
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this.getAge = function() {
        return this.age;
    }
}

// let student01 = new StudentConstructor("Muhammed", "Gardashov", 20);
// console.log(student01);
// console.log(student01.getAge());




class StundentClass{
    constructor(_name, _surname, _point, _age){
        this.name = _name;
        this.surname = _surname;
        this.point = _point;
        this.age = _age;
    }

    isLicenseAge(){
        if(this.age < 18){
            return "Your age is not aviable for licensing purposes"
        }
        else{
            return "Your age is aviable for licensing purposes"
        }
    }

    examPoint(){
        if(this.point <= 100 && this.point > 90){
            return "A"
        }
        else if(this.point <= 90 && this.point > 80){
            return "B"
        }
        else if(this.point <= 80 && this.point > 70){
            return "C"
        }
        else if(this.point <= 70 && this.point > 60){
            return "D"
        }
        else if(this.point <= 60 && this.point > 50){
            return "E"
        }
        else{
            return "Failed exam"
        }
    }
}

// let student1 = new StundentClass("Muhammed", "Gardashov", 61, 20);
// console.log(student1);
// console.log(student1.isLicenseAge());
// console.log(`Exam result: ${student1.examPoint()}`);
