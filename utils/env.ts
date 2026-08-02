import dotenv from 'dotenv';

dotenv.config();

export const env = {

    BASE_URL: process.env.BASE_URL || ''

};