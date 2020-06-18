import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const ParallelView: React.FC = () => {
  // Animated values
  const translateY = React.useRef(new Animated.Value(0)).current;
  const opacity = React.useRef(new Animated.Value(1)).current;

  // Animated parallel
  const animateParallel = () => {
    translateY.setValue(0);
    opacity.setValue(1);

    Animated.parallel([
      // First one
      Animated.timing(translateY, {
        toValue: -100,
        duration: 1500,
        useNativeDriver: true,
      }),
      // And second one
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper
      title="Parallel Animations"
      subtitle="See /views/API/Parallel.view.tsx"
    >
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Animated.View
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'tomato',
              marginHorizontal: 8,
              transform: [{ translateY }],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'tomato',
              marginHorizontal: 8,
              opacity,
            }}
          />
        </View>
        <Button onPress={animateParallel}>Animate it!</Button>
      </View>
    </ScreenWrapper>
  );
};
