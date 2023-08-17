export const isValidName = (name) => {
  const nameregex = /^[A-Za-z\s'-]+$/;
  return nameregex.test(name.trim());
};

export const isValidEmail = (email) => {
  const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailregex.test(email.trim());
};

export const isValidPhoneNumber = (phoneNumber) => {
  const phoneNumberregex = /^[6-9]\d{9}$/;
  return phoneNumberregex.test(phoneNumber.trim());
};
