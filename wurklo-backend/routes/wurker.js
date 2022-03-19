import express from 'express';
import { getWurkers, createWurker } from '../controllers/wurkers.js'

const router = express.Router();

router
    .route('/')
    .get(getWurkers)
    .post(createWurker);

// router
//     .route('/:id')
//     .get(getWork)
//     .put(updateWork)
//     .delete(deleteWork);

export default router;