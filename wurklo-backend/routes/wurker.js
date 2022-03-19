import express from 'express';
import { getWurkers, createWurker, getWurker, updateWurker } from '../controllers/wurkers.js'

const router = express.Router();

router
    .route('/')
    .get(getWurkers)
    .post(createWurker);

router
    .route('/:id')
    .get(getWurker)
    .put(updateWurker)
//     .delete(deleteWork);

export default router;