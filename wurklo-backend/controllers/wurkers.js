import Wurker from '../models/wurker.js';

// @desc get all the wurkers
// @route GET /api/v1/wurkers
// @access Public
export const getWurkers = async (req, res, next) => {
    console.log("hi")
    try {
        const wurkers = await Wurker.find();
        res.status(200).json({ success: true, count: wurkers.length, data: wurkers });

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