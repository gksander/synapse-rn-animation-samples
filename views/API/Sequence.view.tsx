import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const SequenceView: React.FC = () => {
  // Animated translateY value
  const translateY = React.useRef(new Animated.Value(0)).current;

  // Animated sequence
  const animateSequence = () => {
    translateY.setValue(0);

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
    ]).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper
      title="Sequencing Animations"
      subtitle="See /views/API/Sequence.view.tsx"
    >
      <View>
        <Animated.View
          style={{
            width: 300,
            height: 50,
            backgroundColor: 'tomato',
            transform: [{ translateY }],
          }}
        />
        <Button onPress={animateSequence}>Animate it!</Button>
      </View>
    </ScreenWrapper>
  );
};
