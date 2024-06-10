const { model, Schema, Types } = require('../connection')
const myschema = new Schema({
    name: { type: String, require: true},
    email: { type: String, require: true },
    comment: { type: String, require: true },
    rating: { type: Number, require: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('feedback', myschema)