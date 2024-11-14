export const hexToRgb = (data: string): number[] => {
  const r = parseInt(data.slice(1, 3), 16);
  const g = parseInt(data.slice(3, 5), 16);
  const b = parseInt(data.slice(5, 7), 16);
  return [r, g, b];
};

export const createRandomRgb = (): number[] => {
  const getRandomInt = (): number => {
    const min = Math.ceil(0);
    const max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const r = getRandomInt();
  const g = getRandomInt();
  const b = getRandomInt();
  return [r, g, b];
};
