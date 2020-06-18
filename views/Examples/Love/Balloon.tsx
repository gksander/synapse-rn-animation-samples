import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BalloonType, WINDOW_HEIGHT, WINDOW_WIDTH } from './helpers';
import { Animated, Easing } from 'react-native';

// Create animated icon
const AnimIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

/**
 * A single balloon
 */
export const Balloon: React.FC<{
  balloon: BalloonType;
  removeBalloon: (b: BalloonType) => any;
}> = ({ balloon, removeBalloon }) => {
  const animValue = React.useRef(new Animated.Value(0)).current;
  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [WINDOW_HEIGHT / 8, -WINDOW_HEIGHT / 4],
  });
  const rotateZ = animValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg'],
  });

  // Start the animation
  React.useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
    }).start(() => removeBalloon(balloon));
  }, []);

  return (
    <AnimIcon
      name={balloon.shape}
      color={balloon.color}
      size={balloon.size}
      style={{
        position: 'absolute',
        left: balloon.displayX,
        top: '50%',
        transform: [{ translateY }, { rotateZ }],
      }}
    />
  );
};
