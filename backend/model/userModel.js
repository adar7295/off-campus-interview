const { model, Schema } = require('../connection');

const mySchema = ({
    name : { type : String, required : true},
    passsword : String,
    email : { type : String, unique:true},
    createdAt : { type : Date, default : Date.now}
});

module.exports=model('user',mySchema);