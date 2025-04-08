const express = require('express');
const app =express();
const port = 3001;

//array of student JSON details
const students = require('./DB/studentdb')

app.get('/',(req,res)=>{
    res.send(students);
});

app.get('/msg',(req,res)=>{
    res.send('Hello IT Students');
});

app.get('/stu/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    const result = students.find(student.regno==id)
    if(result)
    {
        res.send(result)
    }
    else{
        res.status(404).send("Student not found");
    }
});

app.listen(port,()=>{
    console.log(`Server is running on:${port}`);
});