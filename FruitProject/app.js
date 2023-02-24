const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
 
 
// Insertion
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
 
const Fruit = mongoose.model("Fruit", fruitSchema);
 
const Apple = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Very Tasty and Good For Health" 
});
const Orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "Sourfull!" 
});
const Banana = new Fruit({
  name: "Banana",
  rating: 7,
  review: "Rich in Fibers recommended for thin person" 
});
 
// Apple.save();   for saving one at a time
Fruit.insertMany([Orange,Banana,Apple], function(err){  // for inserting many at a time
  if(err){
    console.log(err);
  }else{
    console.log("Succesfully added to fruitsDB");
  }
});
 
 
// Reading
// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(fruits);
//   }
 
//   mongoose.connection.close();
// });