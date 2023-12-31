export const validators = {
  email: [
    { required: true, messege: 'Please input the email', trigger: ['blur', 'change'] },
    { type: 'email', message: 'Please enter a valid email address', trigger: ['blur', 'change'] }
  ],
  pass: [
    { required: true, messege: 'Please input the password', trigger: ['blur', 'change'] },
    { min: 8, max: 15, message: 'Length should be 8 to 15', trigger: ['blur', 'change'] },
    { pattern: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: 'Password must contain at least one digit, one uppercase and have at least 8 characters', trigger: ['blur', 'change'] }
  ],
}
