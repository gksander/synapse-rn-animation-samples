import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';

export const Rotation: React.FC = () => {
  // This will vary from 0 to 1
  const animValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1,
          duration: 3000,
        }),
        Animated.delay(1200),
      ]),
    ).start();
  }, []);

  // Interpolated values
  // Translate from 0 to 300 units
  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  // Background color from purple-ish to green-ish, then to pink-ish
  const backgroundColor = animValue.interpolate({
    inputRange: [0, 0.75, 1],
    outputRange: ['#1c118f', '#2b704a', '#f765e9'],
  });

  return (
    <ScreenWrapper title="Interpolation">
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            width: 200,
            height: 200,
            backgroundColor,
            transform: [{ translateY }],
          }}
        />
      </View>
    </ScreenWrapper>
  );
};
