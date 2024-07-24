import express from "express"
import uploadRouter from "./routes/upload.route.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(cors({
    allowedHeaders: ["*"],
    origin: "*"
}));
app.use(express.json());
app.use('/upload', uploadRouter);

app.get('/', (req, res) => {
    res.send("vid farm")
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})

