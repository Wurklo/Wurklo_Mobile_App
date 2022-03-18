const Work = require('../models/Work');
// import Work from '../models/Work';

// @desc get all the works
// @route GET /api/v1/works
// @access Public
exports.getWorks = async (req, res, next) => {

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
exports.getWork = async (req, res, next) => {

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

// @desc create new work
// @route POST /api/v1/works
// @access Private
exports.createWork = async (req, res, next) => {
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
exports.updateWork = async (req, res, next) => {
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
exports.deleteWork = async (req, res, next) => {
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
exports.workPhotoUpload = async (req, res, next) => {
    try {
        const work = await Work.findByIdAndDelete(req.params.id);
        if (!work) {
            res.status(400).json({ success: false });
        }

        if (!req.files) {
            return res.status(404).json({ success: false });
        }
    } catch (error) {
        res.status(400).json({ success: false });

    }
};