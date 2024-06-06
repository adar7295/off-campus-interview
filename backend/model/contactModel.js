const { model, Schema } = require('../connection');
const mySchema = new Schema ({
    firstName:String,
    lastName:String,
    company:String,
    email:String,
    subject:{type:String,require:true},
    message:{type:String,require:true},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('contact', mySchema);