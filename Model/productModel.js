import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name : {
        type : String,
        required : true,
    },

    category : {
        type : String,
        required : true,
    },

    carbonFootprint : {
        type : Number,
        required : true,
    }, 
    waterUsage : {
        type : Number,
        required : true,
    }, 

    recyclable : {
        type : Boolean,
        required : true
    }
})

const productModel = new model("product", productSchema);

export default productModel; 