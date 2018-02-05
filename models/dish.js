var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
dish_name:String,
restaurant_name:String,
price:Number,
rating:{type:Number,default:0},
image:{type:String,default:"http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/moong-dal-fry-recipe-2.jpg"},
type:String
});

module.exports=mongoose.model('dish',schema);