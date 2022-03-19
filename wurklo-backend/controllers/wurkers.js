import Wurker from '../models/wurker.js';

// @desc get all the wurkers
// @route GET /api/v1/wurkers
// @access Public
export const getWurkers = async (req, res, next) => {
    try {
        const wurkers = await Wurker.find();
        res.status(200).json({ success: true, count: wurkers.length, data: wurkers });

    } catch (error) {
        res.status(400).json({ success: false });

    }

};

// @desc get single the wurker
// @route GET /api/v1/wurkers/:id
// @access Public
export const getWurker = async (req, res, next) => {

    try {
        const wurker = await Wurker.findById(req.params.id);

        if (!wurker) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: wurker })
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

// @desc create new wurker
// @route POST /api/v1/wurkers
// @access Private
export const createWurker = async (req, res, next) => {
    /// the create error risising
    const wurker = await Wurker.create(req.body);
    res.status(201).json({
        success: true,
        data: wurker
    });

};

// @desc update wurker
// @route PUT /api/v1/wurkers/:id
// @access Private
export const updateWurker = async (req, res, next) => {
    const wurker = await Wurker.findByIdAndUpdate(req.params.id, req.body, {

        new: true,
        runValidators: true
    });

    if (!wurker) {
        return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: wurker });
};