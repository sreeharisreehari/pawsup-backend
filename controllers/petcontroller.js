// import model
const petdetails=require('../Model/petschema') 


exports.addpett=async(req,res)=>{
    console.log('inside project add contrioller');

    const userid=req.payload
    console.log(userid);

    const petimage=req.file.filename
    console.log(petimage);

    const {petname,breed,age,sex,description,location,colour,vaccination,reason,apemail,contact}=req.body
    console.log(`${petname},${breed},${age},${sex},${description},${location},${colour},${vaccination},${reason},${apemail},${contact},${petimage},${userid}`);

    try{
        const existingpet= await petdetails.findOne({petname,breed,age,sex,description,location,colour,vaccination,reason,apemail,contact})
        if(existingpet){
            res.status(401).json('pet already exist...please upload a new pet')

        }
        else{
           const newpet= new petdetails({
            petname,breed,age,sex,description,location,colour,vaccination,reason,apemail,contact,image:petimage,userid

           })
           await newpet.save()
           res.status(200).json(newpet)


        }


    }
    catch(err){
        req.status(401).json(`Reequest failed due to ${err}`)

    }


   
}

// adopt pet
exports.adoptpet=async(req,res)=>{
    const search=req.query.search
    console.log(search);
    const query={
       breed:{
        $regex:search,$options:'i'
       }

    }
    try{
    const adoptpet=await petdetails.find(query)
    res.status(200).json(adoptpet)
    }
    catch(err){
        res.status(401).json(`Request failed due to ${err}`)

    }


}

// editpet
exports.editpet=async(req,res)=>{
    const userid=req.payload
    console.log(userid);
    try{
        const editpet=await petdetails.find({userid})
        res.status(200).json(editpet)

    }
    catch(err){
        res.status(401).json(`Request failed due to ${err}`)

    }



}

// edit project
exports.updateuserpet=async(req,res)=>{
    console.log("hi");
    const {id}=req.params
    console.log(id);
    const userid=req.payload
    console.log(userid);
    const {petname,breed,age,sex,description,location,colour,vaccination,reason,apemail,contact,image}=req.body
    console.log(req.body);

    const uploadedpetimage=req.file?req.file.filename:image


     try{
        const updatepoet=await petdetails.findByIdAndUpdate({_id:id},{petname,breed,age,sex,description,location,colour,vaccination,reason,apemail,contact,image:uploadedpetimage,userid},{new:true}) 
        await updatepoet.save()
        res.status(200).json(updatepoet)

     }
     catch(err){
        res.status(401,"sugam").json(err)

     }

}

// delete project

exports.deletepet=async(req,res)=>{
    const {id}=req.params
    console.log("test 1");
    try{

        const removepet= await petdetails.findByIdAndDelete({_id:id})
        res.status(200).json(removepet)

    }catch(err){
        res.status(401).json(err)
    }


}


