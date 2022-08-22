/** packages */
const mongoose = require("mongoose");

/** using schema */
const schema = require("../schemas/pag.schema");

schema.static = {
    create: function (data, cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function(query,cb){
        this.find(query, cb);
    },
    getBycode: function(query,cb){
        this.findOneAndUpdate(query,{$set: data}, {new: true}, cb);
    },
    delete: function(query, cb){
         this.findOneAndDelete(query);
    }

};

const dto = mongoose.model("coll_pag", schema);
module.exports = dto;