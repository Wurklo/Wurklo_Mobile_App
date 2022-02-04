const mongoose = require('mongoose');
const WorkSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Plaease add name'],

        maxlength: [1000, 'name cannot be more than this.']
    },

    slug: String,

    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    description: {
        type: String,
        required: [true, 'Plaease add description'],

        maxlength: [5000, 'Description cannot be more than this.'],
    },

    upvote: {
        type: Number,
    },
    downvote: {
        type: Number,
    },

    pay_rate: Number,
    collab: {
        type: Boolean,
    },
    created: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Work', WorkSchema);