const add = require('add');
const sub = require('sub');
const mul = require('mul');
const div = require('div');

module.exports = (args, operation) => {
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