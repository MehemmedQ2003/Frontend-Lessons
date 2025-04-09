// ! Static o deməkdir ki, əgər funksiyanı obyektin özü ilə çağırıramsa, obyekt daxilində olan bir funksiyanın əvvəlinə static sözünü yazmalıyam. Yox əgər bir dəyişkənə atayıb, elə çağırıramsa, o zaman obyekt daxilindəki funksiyaya static yazmağa ehtiyac olmur.


class Human{
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

    static showMessage(){
        console.log("Hello from other side");
    }

    static info = [];
    static addInfo(user){
        Human.info.push(user);
    }
}

const obj = new Human("Muhammed", "Gardashov", 20, 185, 95);

Human.addInfo(obj);
console.table(Human.info);

Human.showMessage();




// class Student extends Human{
//     constructor(_name, _surname, _age, _height, _weight, _university){
//         super(_name, _surname, _age, _height, _weight);
//         this.university = _university;
//     }

//     getUniversity(){
//         return this.university;
//     }
// }

// const student = new Student("Muhammed", "Gardashov", 20, 185, 95, "Azerbaijan State Oil and Industrial University");
// console.log(student.getName());


