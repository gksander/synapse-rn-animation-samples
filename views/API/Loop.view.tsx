import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const LoopView: React.FC = () => {
  // Animated values
  const translateY = React.useRef(new Animated.Value(0)).current;

  // Animated parallel
  const animateLoop = () => {
    translateY.setValue(0);

    Animated.loop(
      Animated.sequence([
        // Bring up...
        Animated.timing(translateY, {
          toValue: -100,
          duration: 1500,
        }),

        // And drop it down!
        Animated.spring(translateY, {
          toValue: 0,
        }),
      ]),
    ).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper
      title="Loop Animations"
      subtitle="See /views/API/Loop.view.tsx"
    >
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
        <Button onPress={animateLoop}>Animate it!</Button>
      </View>
    </ScreenWrapper>
  );
};
