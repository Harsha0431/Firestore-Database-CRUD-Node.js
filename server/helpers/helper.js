
// To validate given value is number or not before adding it to database.
function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}


module.exports = {
    isValidNumber
}