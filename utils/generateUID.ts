export const generateUID = () => {
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const firstPartTransformed = ('000' + firstPart.toString(36)).slice(-3);
  const secondPartTransformed = ('000' + secondPart.toString(36)).slice(-3);
  return firstPartTransformed + secondPartTransformed;
};
