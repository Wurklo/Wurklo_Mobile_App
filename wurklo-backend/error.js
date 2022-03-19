const errorHandler = (err, req, res, next) => {
    // log to console for dec
    console.log(err.stack.red);

    res.status(500).json({

        success: false,
        error: err.message
    });

}

export default errorHandler;