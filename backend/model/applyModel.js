const { model, Types } = require('../connection');

const mySchema = ({
    interview: { type: Types.ObjectId, ref: 'jobpostcollection' },
    user: { type: Types.ObjectId, ref: 'signupData' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('apply', mySchema);