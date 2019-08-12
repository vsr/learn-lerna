module.exports = (...args) => {
    // reduce to sum, err
    return args.reduce((sum, num) => sum + num, 0);
};