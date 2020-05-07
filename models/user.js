const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
        username: {
           type: String,
           required: true
        },
        password: {
            type: String,
            required: true
         },
        organization: {
            type: String,
            required: true
         },
        channel : {
            type: String,
            
         }
})
module.exports = User = mongoose.model('user', userSchema)