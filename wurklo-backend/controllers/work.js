import { application } from 'express';
import Work from '../models/Work.js';
import { generateUploadURL } from '../s3.js';

// @desc get all the works
// @route GET /api/v1/works
// @access Public
export const getWorks = async (req, res, next) => {

    try {
        const works = await Work.find();
        res.status(200).json({ success: true, count: works.length, data: works });

    } catch (error) {
        res.status(400).json({ success: false });

    }

};

// @desc get single the work
// @route GET /api/v1/works/:id
// @access Public
export const getWork = async (req, res, next) => {

    try {
        const work = await Work.findById(req.params.id);

        if (!work) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: work })
    } catch (error) {
        //res.status(400).json({ success: false });
        next(err);
    }
    res.status(200).json({ success: true, msg: `get ${req.params.id} work` });
};

// @desc get s3 bucket url
// @route POST /api/v1/works/uploadurl
// @access Private
// export const getUploadUrl = async (req, res, next) => {
//     /// the create error risising
//     // get request to s3 bucket baby 
//     console.log('hit there')
//     const url = await s3.generateUploadURL();
//     // const work = await Work.create(req.body);
//     res.status(201).json({
//         success: true,
//         data: url
//     });
// };

// @desc create new work
// @route POST /api/v1/works
// @access Private
export const createWork = async (req, res, next) => {
    /// the create error risising
    const work = await Work.create(req.body);
    res.status(201).json({
        success: true,
        data: work
    });
};

// @desc update work
// @route PUT /api/v1/works/:id
// @access Private
export const updateWork = async (req, res, next) => {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, {

        new: true,
        runValidators: true
    });

    if (!work) {
        return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: work });
};

// @desc delete work
// @route DELETE /api/v1/works/:id
// @access Private
export const deleteWork = async (req, res, next) => {
    try {
        const work = await Work.findByIdAndDelete(req.params.id);
        if (!work) {
            res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false });

    }
};


// @desc upload photo bootcamp
// @route PUT /api/v1/works/:id/photo
// @access Private
// export const workPhotoUpload = async (req, res, next) => {
//     try {
//         const work = await Work.findByIdAndDelete(req.params.id);
//         if (!work) {
//             res.status(400).json({ success: false });
//         }

//         if (!req.files) {
//             return res.status(404).json({ success: false });
//         }
//     } catch (error) {
//         res.status(400).json({ success: false });

//     }
// };