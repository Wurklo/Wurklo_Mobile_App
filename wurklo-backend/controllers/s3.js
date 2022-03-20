import { generateUploadURL } from '../s3.js';

// @desc get s3 upload url
// @route GET /api/v1/s3
// @access Public
export const getUploadURL = async (req, res, next) => {

    try {
        const url = await generateUploadURL();
        res.status(200).json({
            success: true,
            data: url
        });
    } catch (error) {
        res.status(400).json({ success: false });

    }

};