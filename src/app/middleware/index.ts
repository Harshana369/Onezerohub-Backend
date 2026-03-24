import morgan from 'morgan';
import config from './../config';
import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const allowedOrigins = config.client_url
    ? config.client_url.split(',').map((o) => o.trim())
    : [];

const middleware = [
    morgan(config.node_env == 'dev' ? 'dev' : 'combined'),
    compression(),
    fileUpload({
        limits: {
            fileSize: 50 * 1024 * 1024,
        },
    }),
    helmet({
        crossOriginResourcePolicy: false,
    }),
    express.json(),
    cookieParser(),
    express.urlencoded({ extended: true }),
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`CORS: origin ${origin} not allowed`));
            }
        },
        credentials: true,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    }),
];
export default middleware;
