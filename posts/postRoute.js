const express=require('express')
const router=express.Router()
const post_service=require('./postService')

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = post_service.getPostByID(id)
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

