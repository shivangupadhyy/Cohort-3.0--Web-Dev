const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    fs.readdir(path.join(__dirname, './files/'), (err, files)=>{
        if(err){
            return res.status(500).json({error: 'failed to retrieve files'})
        }
        res.json(files)
    })
})
app.get('/files/:filename', (req, res)=>{
    const name=req.params.filename;
    console.log(name)
    fs.readFile(filename,'utf-8', function(err, data){
        res.json({
            data
        })
    })

})

app.listen(3000);
