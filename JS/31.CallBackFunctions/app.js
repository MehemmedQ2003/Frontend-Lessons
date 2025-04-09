// Callback functions

function sayHello(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 3000);
    setTimeout(() => {
        callback2();
    }, 6000);
};

function eating(){
    console.log("I am eating");
};

function reading(){
    console.log("I am reading");
};

// sayHello(eating, reading);
// sayHello(() => console.log("Hello"), () => console.log("Goodbye"));



// ! Promise

is_done = true;
function CustomPromise(success, failure) {
    this.success = success;
    this.failure = failure;
    this.then = function(callback) {
        this.success = callback;
        return this;
    }
    this.cathch = function(callback){
        this.failure = callback;
        return this;
    }
    this.resolve = function(){
        this.success();
    }
}

let obj = new CustomPromise(function(){
    console.log("Success");
}, function(){
    console.log("Failure");
});

obj.then(function(){
    console.log("Success");
}).cathch(function(){
    console.log("Failure");
}).resolve();