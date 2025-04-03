const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile(filepath,'utf8')  //return a promise
}

readFile('file.txt').then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err);
})