module.exports = (...args) => {
    return args.reduce((sum, num) => sum * num, 0);
};