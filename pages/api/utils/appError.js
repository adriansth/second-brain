class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = `${statusCode}`.startsWith('4') ? 'error' : 'fail';
        Error.captureStackTrace(this, this.constructor);    
    }
}

module.exports = { AppError };