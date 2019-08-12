module.exports = (...args) => {
    // comment
    return args.reduce((sum, num) => sum * num, 0);
};