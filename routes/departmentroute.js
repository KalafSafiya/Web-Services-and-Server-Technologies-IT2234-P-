const express=require('express')
const router=express.Router()
const Department=require('../models/department')
const Employee=require('../models/employee')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Department.find() 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.post('/departments', async (req, res) => {
  try {
    const result = await Department.insertMany(req.body);
    res.status(201).json({ message: 'Departments inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Get a department by ID along with its employees
router.get('/:did/employees', async (req, res) => {
    const did = req.params.did;
    try {
        const department = await Department.findById(did);
        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }

        // Fetch employees linked to this department
        const employees = await Employee.find({ departmentID: did });

        res.status(200).json({
            department,
            employees
        });
    } catch (error) {
        console.error("Error fetching department with employees:", error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

/////

router.get('/emp/:did', async (req, res) => {
    
    try {
        const did = req.params.did;

        const results = await Employee.find({departmentID:did}).populate("departmentID")
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
});



module.exports=router