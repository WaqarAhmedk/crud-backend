
const mongoose = require('mongoose');
const connectionString = `mongodb+srv://waqar:waqar@cluster0.2utvwps.mongodb.net/?retryWrites=true&w=majority`

const connectDb = () => {
    mongoose.connect(connectionString).then((res) => {
        console.log('db connected')
    }).catch((err) => {
        console.log('Error while connecting db', err)
    })
}


module.exports = connectDb