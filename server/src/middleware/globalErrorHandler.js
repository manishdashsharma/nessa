
export default (err, _, res, __) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json(err);
};