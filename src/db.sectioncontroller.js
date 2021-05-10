const express = require("express");
const router = express.Router();
const crud = require("./db.sectioncurd");

router.put('/updateSection', async(req, res) => {
    try{
        res.json(await crud.updateSection(req.body));
    }
    catch(err)
    {
        res.json(err);
    }
});

router.get('/getAll', async(req, res) => {
    try{
        res.json(await crud.getAll());
    }
    catch(err)
    {
        res.json(err);
    }
});

module.exports = router;