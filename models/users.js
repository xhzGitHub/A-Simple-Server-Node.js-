const mongoose = require('../db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: String,
    date: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = User = mongoose.model('users', UserSchema);