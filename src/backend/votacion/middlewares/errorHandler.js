// src/backend/votacion/middlewares/errorHandler.js

function errorHandler(err, req, res, next) {
    console.error(`Error log: ${err.stack}`);

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Un error interno ha ocurrido.";

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message: errorMessage
    });
}

module.exports = errorHandler;
