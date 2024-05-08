const { model, Schema, Types } = require('../connection');

const mySchema = ({
    company : { type : Types.ObjectId, ref : ''},
    email:String,
    designation: String,
    numberOfEntries:String,
    jobType: String,
    salary: String,
    eduQualification: String,
    workExperience: String,
    location: String,
    createdAt : { type : Date, default : Date.now}
});

module.exports=model('jobpostdata',mySchema);