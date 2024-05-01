const mongoose = require('mongoose');
const url = "mongodb+srv://adarsh7295:1234@cluster0.x3kbjni.mongodb.net/off-Campus?retryWrites=true&w=majority&appName=Cluster0"

// Asynchronus Function
mongoose.connect(url)
.then((result) => {
    console.log('connect to DB');
})

.catch((err) => {
    console.log(err);
});

module.exports = mongoose;