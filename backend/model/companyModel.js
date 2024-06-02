const { model, Schema } = require('../connection');

const mySchema = ({
    compName: { type: String, required: true },
    compEmail: { type: String, unique: true },
    password: String,
    logo: { type: String, default: 'logo_placeholder.png' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('companyData', mySchema);