module.exports = (...args) => {
    // reduce to sum
    return args.reduce((sum, num) => sum + num, 0);
};