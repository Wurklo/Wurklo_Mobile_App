import mongoose from 'mongoose';
import moment from 'moment';

const wurkerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please add name'],

        maxlength: [100, 'Name cannot be more than this.']
    },

    image: {
        type: String,
        default: 'no-photo.jpg'
    },

    description: {
        type: String,
        required: [true, 'Please add description'],

        maxlength: [500, 'Description cannot be more than this.'],
    },

    skill: {
        type: String,
        required: [true, 'Please add a skill'],
        maxlength: [50, 'Description cannot be more than this.'],
    },

    rating: {
        type: Array,
    },

    upvote: {
        type: Array,
    },

    downvote: {
        type: Array,
    },

    pay_rate: Number,
    
    created: {
        type: Number,
        default: moment().valueOf()
    }

});

const Wurker = mongoose.model('Wurker', wurkerSchema);
export default Wurker;