const MOBILE_REGEX = /^\d+$/;
const mobileValid = (value: string) => {
  return MOBILE_REGEX.test(value);
};

export {mobileValid};
