export const isValidLetter = (value: string | undefined): boolean => {
  console.log('Value:', value);
  if (!value) {
    return false;
  }
  const checkValue = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9 ._-]+$/.test(value);
  return checkValue || value.trim().length > 0;
};
