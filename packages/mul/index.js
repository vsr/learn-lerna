module.exports = (...args) => {
    // some change
    return args.reduce((sum, num) => sum * num, 0);
};