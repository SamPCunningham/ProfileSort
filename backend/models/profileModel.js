import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
})