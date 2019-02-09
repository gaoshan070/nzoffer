module.exports = {
  type: String,
  required: [true, '请输入手机号'],
  unique: true,
  validate: {
    validator: v => /^\d{11}$/.test(v),
    message: props =>
      `${props.value} 请输入格式正确的手机号!`,
  },
};
