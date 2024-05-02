const { model, Schema } = require('../connection');

const mySchema = ({
    firstName : { type : String, required : true},
    lastName : { type : String, required : true},
    email : { type : String, unique:true},
    password : String,
    createdAt : { type : Date, default : Date.now}
});

module.exports=model('signupData',mySchema);