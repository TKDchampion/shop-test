export const throttleFtn = (
  func: (...args: unknown[]) => void,
  delay: number
) => {
  let lastCall = 0;
  return (...args: unknown[]) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};
