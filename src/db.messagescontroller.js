const express = require("express");
const router = express.Router();
const crud = require("./db.msgscurd");

router.get("/hello", (req,res) => {
    res.json("hello");
});
router.post('/addMsg', async(req, res) => {
    try{
        res.json(await crud.addMessage(req.body));
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
});

router.put('/updateMsg', async(req, res) => {
    try{
        res.json(await crud.updateMessage(req.body));
    }
    catch(err){
        res.json("failed");
    }
});

router.get('/getMsg', async(req, res) => {
    try{
        res.json(await crud.getAll());
    }
    catch(err){
        res.json("failed");
    }
});

router.delete('/deleteMsg', async(req, res) => {
    try{
        res.json(await crud.deleteMessage(req.body));
    }
    catch(err){
        res.json("failed");
    }
});

module.exports = router;