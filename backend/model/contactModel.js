const { model, Schema } = require('../connection');
const mySchema = new Schema ({
    subject:{type:String,require:true},
    message:{type:String,require:true},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('contact', mySchema);