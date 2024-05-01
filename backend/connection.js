const mongoose = require('mongoose');
const url = ""

// Asynchronus Function
mongoose.connect(url)
.then((result) => {
    console.log('connect to DB');
})

.catch((err) => {
    console.log(err);
});

module.exports = mongoose;