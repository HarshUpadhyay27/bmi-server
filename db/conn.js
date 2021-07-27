const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bmi-api', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection Sucessfull')
}).catch((e)=>{
    console.log(`No Connection ${e}`)
})