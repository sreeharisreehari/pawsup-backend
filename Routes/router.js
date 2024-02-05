// setup path to resolve request
const express=require('express')

// import controller
const usercontroller=require('../controllers/usercontroller')

// import pet

const petcontroller=require('../controllers/petcontroller')

// import jwt
const jwtmiddleware=require('../Middlewares/jwtmiddleware')

const multerconfig=require('../Middlewares/multermiddleware')


// create a  object for router class insde express module

const router=new express.Router()


// router syntax:router.http request('path',()=>{logic in controller})
router.post('/user/register',usercontroller.register)


// login
router.post('/user/login',usercontroller.login)

// add pet
router.post('/petdata/add',jwtmiddleware,multerconfig.single('image'),petcontroller.addpett)

// adoptpet
router.get('/petdata/adopt',petcontroller.adoptpet)

// editpet
router.get('/petdata/edit',jwtmiddleware,petcontroller.editpet)

// updatepet
router.put('/petdata/update/:id',jwtmiddleware,multerconfig.single('image'),petcontroller.updateuserpet)

// deletepet
router.delete('/petdata/remove/:id',jwtmiddleware,petcontroller.deletepet)

// edit profile
router.put('/user/uprofile',jwtmiddleware,multerconfig.single('profile'),usercontroller.edituser)

// get user length
router.get('/user/length',usercontroller.reguser)






module.exports=router




