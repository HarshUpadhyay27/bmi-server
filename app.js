const express = require("express");
const Model = require("./model/model");
const app = express();
const port = process.env.PORT || 5000;
require("./db/conn");
app.use(express.json());

app.post('/user', async (req, res)=>{
    try {
        if(req.body.height && req.body.weight && req.body.bmi){
            const model = new Model(req.body)
            const createModel = await model.save();
            res.status(201).send(createModel)
        }
        else{
            res.status(401).send("something went wrong")
        }
    } catch (error) {
        res.status(401).send(error.message)
    }
})

app.get("/graph", async (req, res)=>{
    try {
        const modelData = await Model.find()
        res.status(201).send(modelData)
    } catch (error) {
        res.status(401).send(error.message)
    }
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
