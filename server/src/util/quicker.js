import os from 'os';
import config from '../config/config.js';
import bcrypt from 'bcryptjs'
import { parsePhoneNumber } from 'libphonenumber-js'
import { getTimezonesForCountry } from 'countries-and-timezones'
import { v4 } from 'uuid'
import { randomInt } from 'crypto'
import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'
import axios from 'axios';
import { ExternalApiUrls, EProductCategories, EACProductSubCategories, ESolarProductSubCategories, EElectronicsProductSubCategories } from '../constant/application.js';


export default {
    getSystemHealth: () => {
        return {
            cpuUsage: os.loadavg(),
            totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
        };
    },
    getApplicationHealth: () => {
        return {
            environment: config.ENV,
            uptime: `${process.uptime().toFixed(2)} Seconds`,
            memoryUsage: {
                heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
            },
        };
    },
    parsePhoneNumber: (phoneNumber) => {
        try {
            const parsedContactNumber = parsePhoneNumber(phoneNumber)
            if (parsedContactNumber) {
                return {
                    countryCode: parsedContactNumber.countryCallingCode,
                    isoCode: parsedContactNumber.country || null,
                    internationalNumber: parsedContactNumber.formatInternational()
                }
            }

            return {
                countryCode: null,
                isoCode: null,
                internationalNumber: null
            }
        } catch (err) {
            return {
                countryCode: null,
                isoCode: null,
                internationalNumber: null
            }
        }
    },
    hashPassword: (password) => {
        return bcrypt.hash(password, 10)
    },
    comparePassword: (attemptedPassword, encPassword) => {
        return bcrypt.compare(attemptedPassword, encPassword)
    },
    countryTimezone: (isoCode) => {
        return getTimezonesForCountry(isoCode)
    },
    generateRandomId: () => v4(),
    generateOtp: (length) => {
        const min = Math.pow(10, length - 1)
        const max = Math.pow(10, length) - 1

        return randomInt(min, max + 1).toString()
    },
    generateToken: (payload, secret, expiry) => {
        return jwt.sign(payload, secret, {
            expiresIn: expiry
        })
    },
    verifyToken: (token, secret) => {
        return jwt.verify(token, secret)
    },
    getDomainFromUrl: (url) => {
        try {
            const parsedUrl = new URL(url)
            return parsedUrl.hostname
        } catch (err) {
            throw err
        }
    },
    generateResetPasswordExpiry: (minute) => {
        return dayjs().valueOf() + minute * 60 * 1000
    },
    getLocationDetails: async() =>{
        try {
            const res= await axios.get(ExternalApiUrls.LOCATION_DETAILS)
            if(res && res.data){
                return res.data
            }
            return null
        } catch (error) {
            return null          
        }
    },
    subCategoriesMap : {
        [EProductCategories.AC_PRODUCT]: Object.values(EACProductSubCategories),
        [EProductCategories.SOLAR_PRODUCT]: Object.values(ESolarProductSubCategories),
        [EProductCategories.ELECTRONICS]: Object.values(EElectronicsProductSubCategories),
    }
    
};
