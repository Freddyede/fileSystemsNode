const dotenv = require("dotenv");
const express = require("express");
const AppRouter = require("./router/AppRouter");

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT);

app.use(AppRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})