import { Dimensions } from 'react-native';

export type BalloonType = {
  x: number;
  displayX: number;
  color: string;
  size: number;
};

// Window dimensions
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

// Get a random int between two values
export const getRandomInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min));

// Get a random color
const COLORS = ['red', 'blue', 'green', 'purple', 'black', 'gray'];
export const getRandomColor = () => COLORS[getRandomInt(0, COLORS.length)];

// Get a random size
const SIZES = [25, 30, 35, 40, 45];
export const getRandomSize = () => SIZES[getRandomInt(0, SIZES.length)];

export const getBalloonDisplayX = (x: number) => {
  const isMovingRight = Math.floor(x / WINDOW_WIDTH) % 2 === 1;
  return isMovingRight ? x % WINDOW_WIDTH : WINDOW_WIDTH - (x % WINDOW_WIDTH);
};
