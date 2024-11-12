export const isValid = (value: string): boolean => {
  const checkValue = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9 ._-]+$/.test(value);
  return !checkValue || value.trim().length === 0;
};
