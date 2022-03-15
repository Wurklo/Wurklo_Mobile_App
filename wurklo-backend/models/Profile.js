const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    location: {
        type:String
    },
    status: {
        type: String,
        required: true
    },
    bio: {
        type:String
    },
   
    experience: [
        {

            title: {
                type: String,
                required:true
            },
            company: {
                type: String,
                required:true
            },
            location: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required:true
            },
            to: {
                type:Date
            },
            current: {
                type: Boolean,
                default:false
            },
            description: {
                type:String
            }
        }
    ]
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);