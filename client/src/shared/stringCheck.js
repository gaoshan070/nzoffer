function isValidLengthString(expectedLength) {
  return v => typeof v === 'string' && v.length > expectedLength;
}

module.exports = {
  isValidLengthString,
};
