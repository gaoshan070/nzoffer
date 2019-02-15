module.exports = {
  isStreetNumValid: streetNum =>
    typeof streetNum === 'string' && streetNum.length >= 1,
  isStreetNameValid: streetName =>
    typeof streetName === 'string' && streetName.length >= 2,
};
