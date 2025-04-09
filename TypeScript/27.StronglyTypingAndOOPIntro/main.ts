const a:number = 5;
const b:number = 10;
const c:number = 15;
// console.log(a + b + c);


function getName(_name:string, _surname:string) {
    // console.log(_name + " " + _surname);
}
getName("Muhammed", "Gardashov");
getName("Metin", "Gardashov");


class Human{
    private Name:string;
    public Surname:string;
    constructor(_name:string, _surname:string) {
        this.Name = _name;
        this.Surname = _surname;
    }

    fullName(){
        console.log(`${this.Name} - ${this.Surname}`);
    }

    setName(_newName: string){
        this.Name = _newName;
    }
}

let obj:Human = new Human("Muhammed", "Gardashov");

obj.setName("Metin");
obj.fullName();