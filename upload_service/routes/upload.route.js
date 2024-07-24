// routes/upload.route.js
import express from "express"
import uploadFileToS3 from "../controllers/upload.controller.js";


const router = express.Router();
router.post('/', uploadFileToS3);

export default router

// we give '/' and not '/upload' bc the upload part is alr given in index.js