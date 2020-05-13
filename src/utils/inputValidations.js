export const validateEmail = (email) => {
  const re = /^.+@.+\..+/;
  return re.test(String(email).toLowerCase());
};

export const validateName = (name) => name && name.length > 2;

export const validateMatchingEmail = (email, confrimEmail) =>
  email === confrimEmail;
