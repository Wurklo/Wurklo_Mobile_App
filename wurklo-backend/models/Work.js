const mongoose = require('mongoose');
const moment = require('moment');

const WorkSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add name'],

        maxlength: [1000, 'name cannot be more than this.']
    },

    slug: String,

    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    description: {
        type: String,
        required: [true, 'Please add description'],

        maxlength: [5000, 'Description cannot be more than this.'],
    },

    upvote: {
        type: Array,
    },
    downvote: {
        type: Array,
    },

    pay_rate: Number,
    collab: {
        type: Boolean,
    },
    created: {
        type: Number,
        default: moment().valueOf()
    }

});

module.exports = mongoose.model('Work', WorkSchema);