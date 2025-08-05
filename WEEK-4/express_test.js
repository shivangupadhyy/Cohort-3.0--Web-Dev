const express = require('express');
const app = express();

const user = [{
    name: 'John Doe',
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

console.log(user[0]);


//req, res=> request and response
app.get('/', (req, res)=>{
    const john = user[0].kidneys;
    const numberOfKidneys  = john.length;
    let numberOfHealthyKidney = 0
    for(let i=0; i<john.length; i++){
        if(john[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney +1
        }
    }
    const numberOfUnHealthyKidney = numberOfKidneys- numberOfHealthyKidney
    res.json({numberOfKidneys,numberOfHealthyKidney, numberOfUnHealthyKidney})
})

app.post('/', (req, res)=>{
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res)=>{
for(let i=0; i<user[0].kidneys.length; i++){
    user[0].kidneys[i].healthy = true;
}
res.json({
    msg: "All kidneys are now healthy!"
})
});

app.delete('/', (req, res)=>{
    const newKidney = [];
    for(let i=0; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidney.push(user[0].kidneys[i]);
        }
    }
    user[0].kidneys = newKidney;
    res.json({
        msg: "Unhealthy kidneys have been removed!"
    })
});

app.listen(3000);