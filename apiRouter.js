const Express = require("express");
const UsuarioRouter = require("./MongoCollections/Usuario/UsuarioRouter");

let router = Express.Router();
router.use("/Usuario/", UsuarioRouter);

router.get("/", (req, res) => {
    res.status(200).json({status: "API is working correctly!"});
})

module.exports = router;