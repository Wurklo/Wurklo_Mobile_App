import mongoose from 'mongoose';
import moment from 'moment';

const workSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add name'],

        maxlength: [100, 'name cannot be more than this.']
    },

    slug: String,

    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    description: {
        type: String,
        required: [true, 'Please add description'],

        maxlength: [500, 'Description cannot be more than this.'],
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

const Work = mongoose.model('Work', workSchema);
export default Work;