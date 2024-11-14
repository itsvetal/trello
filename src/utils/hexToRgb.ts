export const hexToRgb = (data: string): number[] => {
  const r = parseInt(data.slice(1, 3), 16);
  const g = parseInt(data.slice(3, 5), 16);
  const b = parseInt(data.slice(5, 7), 16);
  return [r, g, b];
};
