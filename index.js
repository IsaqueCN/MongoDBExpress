const dotEnv = require("dotenv").config();
const Express = require('express');
const mongoDB = require("./mongoDB")
const apiRouter = require("./apiRouter");

async function startServer() {
    try {
        await mongoDB.connect();
        let app = Express();
        app.use(Express.json())
        app.use("/api/", apiRouter);
        app.get("/", (req, res) => {
            res.status(200).send("<h1>Hello there!</h1>");
        })

        app.listen(process.env.PORT, () => {
            console.log("Server running on http://localhost:3000/")
        })
    } catch(err) {
        console.log("There was an error connecting to MongoDB:\n" + err);
    }
}

startServer();