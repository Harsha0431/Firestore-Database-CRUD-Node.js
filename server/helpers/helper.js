function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}


module.exports = {
    isValidNumber
}