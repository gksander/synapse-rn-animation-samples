import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text } from 'react-native';

export const Rotation: React.FC = () => {
  // This will vary from 0 to 1
  const animValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1,
          duration: 2000,
        }),
        Animated.delay(1200),
      ]),
    ).start();
  }, []);

  // Interpolated values
  // Rotate from 0deg to 360 deg.
  const rotateZ = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  // Background color from purple-ish to pink-ish
  const backgroundColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#1c118f', '#f765e9'],
  });
  // Size from 0 to 1, but will stay "small" for longer
  const size = animValue.interpolate({
    inputRange: [0, 0.75, 1],
    outputRange: [50, 80, 250],
  });

  return (
    <ScreenWrapper title="Interpolation">
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor,
          transform: [{ rotateZ }],
        }}
      />
    </ScreenWrapper>
  );
};
