const Express = require("express");
const Usuario = require("./Usuario");
const mongoose = require("mongoose");

let router = Express.Router();

async function catchErr(req, res, err) {
    res.status(400).json({error: err.message});
}
router.get("/", async (req, res) => {
    let result = await Usuario.find();
    res.status(200).json(result);
})

router.post("/", async (req, res) => {
    try {
    let result = await Usuario.create(req.body);

    res.status(200).json(result);
    } catch (err) {
        catchErr(req, res, err);
    }
})

router.put("/:id", async (req, res) => {
    try {
    let id = req.params.id;
    let result = await Usuario.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});

    res.status(200).json(result);
    } catch (err) {
        catchErr(req, res, err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let result = await Usuario.findByIdAndDelete(id);
        
        if (result == null)
            res.status(404).json({error: "Usuario not found"});
        else
            res.status(200).json(result);
    } catch(err) {
        catchErr(req, res, err);
    }
})

module.exports = router;