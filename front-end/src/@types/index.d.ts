declare module 'react-query';

declare namespace Express {
    export interface Request {
        user: {
            id: string;
        }
    }
}