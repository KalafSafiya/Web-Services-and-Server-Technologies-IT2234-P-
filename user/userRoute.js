const express=require('express')
const router=express.Router()
const user_service=require('./userService')

router.get('/',(req,res)=>{
    const results = user_service.getUser()
    if (results) 
    {
      res.status(200).json(results)  
    } 
    else
    {
       res.status(404).send("Sorry! No Data Found!") 
    }
})


router.get('/summary/:id',(req,res)=>{
  const id = req.params.id
  const results = user_service.getUserByID(id)
  if (results) 
  {
    res.status(200).json(results)  
  } 
  else
  {
     res.status(404).send("Sorry! No Data Found!") 
  }
})



module.exports=router

