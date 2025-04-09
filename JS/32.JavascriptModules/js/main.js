// import { getAllOrders } from "./order.js";
// import * as order from "./order.js";

// order.getSingleOrder();
// order.getAllOrders();
// order.addOrder();
// order.removeOrder();
// order.updateOrder();



let prompt = require("prompt");
prompt.start();

prompt.get(["name", "email"], function (err, result) {
    console.log("Command-line input received:");
    console.log("  name: " + result.name);
    console.log("  email: " + result.email);
});