/** packages */
const mongoose = require("mongoose");

const pagSchema = new mongoose.Schema({
    name:{
        type: "String",
        require: true
    },
    lastname:{
        type: "String",
        require: true
    },
    age:{
        type: "Number",
        require: true
    },
    email:{
        type: "String",
        require: true
    },
    direction:{
        type: "String",
        require: true
    },
    city:{
        type: "String",
        require: true
    },
    country:{
        type: "String",
        require: true
    },
    sttudent:{
        type: "Boolean",
        require: true,
        default: true
    } 

});

module.exports = pagSchema;