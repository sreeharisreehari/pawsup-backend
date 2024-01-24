// import mongoose
const mongoose=require('mongoose')

// create schema
const userschema=new mongoose.Schema({

    username:{
        type:String,
        require:true,
        min:[3,'Must contain atleast 3 characters but got {VALUE}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value))
            {throw new Error('invalid email')}
        }

    },
    password:{
        type:String,
        require:true
    },
    profile:{
        type:String
      
    }
    
    
    

})


 const users=mongoose.model("users",userschema)

//  export
module.exports=users