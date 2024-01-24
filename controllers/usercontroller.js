
const users=require('../Model/uswrschema')

const jwt=require('jsonwebtoken')


exports.register=async(req,res)=>{
    console.log('inside the controller-register function');

    const {username,email,password,profile}=req.body
    try{const existuser=await users.findOne({email})
    if(existuser){
        res.status(406).json('Account already exist.....please login')
    }
    else{
        const newuser=new users({
            username,
            email,
            password,
            profile
        })
     await   newuser.save()

     res.status(200).json(newuser)
    }
}catch(err){
    res.status(401).json(`Register failed due to${err}`)
}





   


    

}

// login
exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{
         const existuser= await users.findOne({email,password})
    console.log(existuser);
    if(existuser){
    // jwt
    const token=jwt.sign({userid:existuser._id},"key123")

    
        res.status(200).json({
            existuser,
            token



        })

    }
    else{
        res.status(404).json('Invalid Email or password')
    }
}catch(err){
    res.status(401).json(`login request failed due to :${err}`);
}


}

// edit profile
exports.edituser=async(req,res)=>{
    const userid=req.payload 
    const {username,email,password,profile}=req.body
    console.log(req.file);

    const profileimage=req.file?req.file.filename:profile
    console.log(profileimage);


    try{
        const updateuser=await users.findByIdAndUpdate({_id:userid},{username,email,password,profile:profileimage},{new:true})

        await updateuser.save()
        res.status(200).json(updateuser)

    }catch(err){
        res.status(401).json(err)

    }

}

// 
exports.reguser=async(req,res)=>{
    
    try{
        const userlength=await users.find()
        res.status(200).json(userlength)

    }
    catch(err){
        res.status(401).json(err)
    }

}
