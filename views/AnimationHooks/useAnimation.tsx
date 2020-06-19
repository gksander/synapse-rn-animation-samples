import * as React from 'react';
import { Animated } from 'react-native';

export function useAnimation() {
  const animation = React.useRef(new Animated.Value(0)).current;

  const interpolate = ({
    inputFinal = 1,
    outputInitial = 0,
    outputFinal = 1,
  }) => {
    const animValue = animation.interpolate({
      inputRange: [0, inputFinal],
      outputRange: [outputInitial, outputFinal],
      extrapolateLeft: 'clamp',
    });
    return animValue;
  };

  return { animation, interpolate };
}
