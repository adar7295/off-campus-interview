const { model, Schema, Types } = require('../connection');

const mySchema = ({
    company : { type : Types.ObjectId, ref : ''},
    email:string,
    designation: String,
    location: String,
    createdAt : { type : Date, default : Date.now}
});

module.exports=model('companyData',mySchema);