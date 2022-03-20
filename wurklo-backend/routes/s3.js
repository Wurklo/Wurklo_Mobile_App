import express from 'express';
import { getUploadURL } from '../controllers/s3.js'

const router = express.Router();

router
    .route('/')
    .get(getUploadURL)

export default router;