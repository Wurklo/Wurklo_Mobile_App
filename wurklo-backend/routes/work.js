import express from 'express';
import { getWork, getWorks, createWork, updateWork, deleteWork, workPhotoUpload } from '../controllers/work.js'

const router = express.Router();

router.route('/:id/photo').put(workPhotoUpload);
router
    .route('/')
    .get(getWorks)
    .post(createWork);

router
    .route('/:id')
    .get(getWork)
    .put(updateWork)
    .delete(deleteWork);

export default router;
