const mongoose=require('mongoose')   //- It helps us define schemas and models for structured data storage

const departmentSchema = new mongoose.Schema({  //- A schema in Mongoose defines the shape of documents stored in MongoDB
    _id: { type: String, required: true }, // Department ID
    name: { type: String, required: true, unique: true },
    head: { type: mongoose.Schema.Types.String, ref: 'Employee' }, // Head of Department
    employees: [{ type: mongoose.Schema.Types.String, ref: 'Employee' }] // Many employees per Department
});
const Department=mongoose.model('Department',departmentSchema) // to models name

/* const DepartmentDetails=new Department({
    _id:1,
    name:'Human Resources',
    head:'EMP1001',
    employees: ['EMP1002', 'EMP1003', 'EMP1004']
})

DepartmentDetails.save() */

module.exports=Department