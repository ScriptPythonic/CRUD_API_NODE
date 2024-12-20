const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the product name"]
    },
    quantity: {
        type:Number,
        required:[true,"Please Enter the quantity"],
        default:0
    },
    price: {
        type:Number,
        required:[true,"Please Enter the price"],
        default:0
    },

    image:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
}
);

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product;