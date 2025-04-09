var a = 5;
var b = 10;
var c = 15;
// console.log(a + b + c);
function getName(_name, _surname) {
    // console.log(_name + " " + _surname);
}
getName("Muhammed", "Gardashov");
getName("Metin", "Gardashov");
var Human = /** @class */ (function () {
    function Human(_name, _surname) {
        this.Name = _name;
        this.Surname = _surname;
    }
    Human.prototype.fullName = function () {
        console.log("".concat(this.Name, " - ").concat(this.Surname));
    };
    Human.prototype.setName = function (_newName) {
        this.Name = _newName;
    };
    return Human;
}());
var obj = new Human("Muhammed", "Gardashov");
obj.setName("Metin");
obj.fullName();
