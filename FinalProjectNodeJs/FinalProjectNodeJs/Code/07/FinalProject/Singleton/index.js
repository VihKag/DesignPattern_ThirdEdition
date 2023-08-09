import Database from "./Database.js";

var database = Database.getInstance();
database.connect();
console.log(database.getState());
database.disconnect();
console.log(database.getState());
