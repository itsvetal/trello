export const isValidLetter = (value: string): boolean => {
  const checkValue = /^[а-яА-ЯёЁіІїЇєЄґҐ\w ._-]+$/.test(value);
  return checkValue || value.trim().length === 0;
};
