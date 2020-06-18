import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const StaggerView: React.FC = () => {
  // Animated translateY value
  const translateY1 = React.useRef(new Animated.Value(0)).current;
  const translateY2 = React.useRef(new Animated.Value(0)).current;

  // Animated sequence
  const animateStagger = () => {
    translateY1.setValue(0);
    translateY2.setValue(0);

    Animated.stagger(500, [
      // First one
      Animated.timing(translateY1, {
        toValue: -100,
        duration: 1500,
      }),
      // And second one
      Animated.timing(translateY2, {
        toValue: -100,
        duration: 1500,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper
      title="Staggering Animations"
      subtitle="See /views/API/Stagger.view.tsx"
    >
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Animated.View
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'tomato',
              marginHorizontal: 8,
              transform: [{ translateY: translateY1 }],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'tomato',
              marginHorizontal: 8,
              transform: [{ translateY: translateY2 }],
            }}
          />
        </View>
        <Button onPress={animateStagger}>Animate it!</Button>
      </View>
    </ScreenWrapper>
  );
};
