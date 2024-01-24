
const mongoose=require('mongoose')
const petschema=new mongoose.Schema({
   
    petname:{
        type:String,
        require:true
    },
    breed:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    sex:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    colour:{
        type:String,
        require:true
    },
    vaccination:{
        type:String,
        require:true
    },
    reason:{
        type:String,
        require:true
    },
    apemail:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
        
    }

})
const pets=mongoose.model("pets",petschema)
module.exports=pets


