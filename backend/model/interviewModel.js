const { model, Schema, Types } = require('../connection');

const mySchema = ({
    company : { type : Types.ObjectId, ref : 'companyData'},
    jobDescription:String,
    designation: String,
    numberOfEntries:String,
    jobType: String,
    salary: String,
    eduQualification: String,
    workExperience: String,
    location: String,
    createdAt : { type : Date, default : Date.now}
});

module.exports=model('jobpostcollection',mySchema);