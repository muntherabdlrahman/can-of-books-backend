'use strict';

const mongoose = require('mongoose');
const bookModel= require('../model/BookSchema.model');

const userDataDb = new mongoose.Schema({
    email: { type: String },
    books: [bookModel]
});

const userModel = mongoose.model('userDataDb', userDataDb);

const userSeed = () => {
    const razan = new userModel({
        email: 'razanalamleh@gmail.com',
        books: [{
            name: 'String',
            description: 'String',
            status: 'String'
        }]
    });
    console.log(data);
    data.save();
}

module.exports = userModel;
userModel();