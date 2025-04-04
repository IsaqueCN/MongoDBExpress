const Express = require("express");
const Usuario = require("./Usuario");
const mongoose = require("mongoose");

let router = Express.Router();

router.get("/", async (req, res) => {
    let result = await Usuario.find();
    res.status(200).json(result);
})

router.post("/", async (req, res) => {
    console.log(req.body)
    let result = await Usuario.create(req.body);

    res.status(200).json(result);
})

module.exports = router;