const add = require('@vinraiwip/add');
const sub = require('@vinraiwip/sub');
const mul = require('@vinraiwip/mul');
const div = require('@vinraiwip/div');

module.exports = (args, operation) => {
    // comment
    switch (operation) {
        case 'add':
            return add(...args);
        case 'sub':
            return sub(...args);
        case 'mul':
            return mul(...args);
        case 'div':
            return div(...args);
        default:
            throw Error(`Undefined operation ${operation}`)
    }
}