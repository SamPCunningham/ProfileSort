import mongoose from 'mongoose';
import { ProfileSchema } from '../models/profileModel';

const Profile = mongoose.model('Profile', ProfileSchema);

export const addNewProfile = (req, res) => {
    let newProfile = new Profile(req.body);

    newProfile.save((err, Profile) => {
        if (err) {
            res.send(err);
        }
        res.json(Profile);
    });
};

export const getProfiles = (req, res) => {
    Profile.find({},(err, Profile) => {
        if (err) {
            res.send(err);
        }
        res.json(Profile);
    });
};