import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const DelayView: React.FC = () => {
  // Animated values
  const translateY = React.useRef(new Animated.Value(0)).current;

  // Animated delay
  const animateDelay = () => {
    translateY.setValue(0);

    Animated.sequence([
      // Bring up...
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.delay(1000),

      // And drop it down!
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper title="Delays" subtitle="See /views/API/Delay.view.tsx">
      <View>
        <Animated.View
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'tomato',
            marginHorizontal: 8,
            transform: [{ translateY }],
          }}
        />
        <Button onPress={animateDelay}>Animate it!</Button>
      </View>
    </ScreenWrapper>
  );
};
