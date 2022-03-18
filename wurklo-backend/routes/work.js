// import express from 'express';
const express = require('express');

const { getWork, getWorks, createWork, updateWork, deleteWork, workPhotoUpload } = require('../controllers/work')

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

module.exports = router;
// export default router;
