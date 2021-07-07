'use strict';

const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    const searchQ= req.query.email;
    userModel.findOne({email:searchQ},(error,user)=>{
        if(!user){
            res.send('user not found');
        }else{
            // console.log(user.books)
            res.json(user.books);
        }
    })
}

const userPost =(req,res)=>{
    const{
        userEmail,
        booksCollection
    }=req.body;
    userModel.findOne({email:'razanalamleh@gmail.com'},(error,user)=>{
        if(!user){
            res.send('user not found');
        }else{
            const newBook = {name:booksCollection}
            user.books.push(newBook)
            user.save();
            console.log(user.books);
            res.json(user.books);
        }
    })
}

module.exports={
    UserController,
    userPost
}