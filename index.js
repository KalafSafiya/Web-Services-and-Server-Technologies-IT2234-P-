const express = require('express');
const app =express();
const port = 8080;

const user_Route=require('./user/userRoute')
const post_Route=require('./posts/postRoute')

app.use(express.json())
app.use('/user',user_Route)
app.use('/post',post_Route)

app.listen(port,()=>{
    console.log(`Server is running on:${port}`);
});

