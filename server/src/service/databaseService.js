import mongoose from 'mongoose';
import config from '../config/config.js';
import locationStatsModel from '../model/locationStatsModel.js';

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL);
            return mongoose.connection;
        } catch (err) {
            throw err;
        }
    },
    savelocationStats: (payload) =>{
        return locationStatsModel.create(payload)
    },
    getLocationStats: () =>{
        return locationStatsModel.find()
    }
};
