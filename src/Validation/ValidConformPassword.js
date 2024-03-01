export const confirmPasswordValidation = (getFieldValue) => ({
  required: true,
  message: 'Please confirm your password!',
  validator(_, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('The two passwords do not match!'));
  },
});
