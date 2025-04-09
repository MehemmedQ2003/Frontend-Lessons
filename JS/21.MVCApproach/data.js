let products = [
    {
        id: 1,
        name: "Apple",
        price: 1.99,
        image: "images/apple.jpg",
        info: "Apple is good fruit"
    },
    {
        id: 2,
        name: "Banana",
        price: 2.99,
        image: "images/banana.jpg",
        info: "Banana is good fruit"
    },
    {
        id: 3,
        name: "Orange",
        price: 3.99,
        image: "images/orange.jpg",
        info: "Orange is good fruit"
    }
];

let cartProduct = [];



let data = [];

// 1. Adding information to cart
// 2. Removing information from cart
// 3. Reading information in cart
// 4. Create information

function setData(obj, db) {
    let dataSetLength = db.length
    db.push(obj);
    if (dataSetLength < db.length) {
        return true;
    } else {
        return false;
    }
}
setData(data, products)


function getAll(db) {
    return db;
}
getAll(products)


function getOne(id, db) {
    return db.find(obj => obj.id == id);
}
getOne(1, products)


function deleteData(id, db) {
    let previousLength = db.length;
    let obj = db.find(obj => obj.id == id);
    let index = db.indexOf(obj);
    db.splice(index, 1);
    if(previousLength != db.length){
        return true;
    }else{
        return false;
    }
}

function updateData(id, db, newValue) {
    let obj = db.find(obj => obj.id == id);
    let index = db.indexOf(obj);
    db[index] = newValue;
}