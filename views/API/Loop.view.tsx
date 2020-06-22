import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const LoopView: React.FC = () => {
  // Animated values
  const translateY = React.useRef(new Animated.Value(0)).current;
  const [onOffState, setOnOffState] = React.useState(false);

  const animationLoop = Animated.loop(
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
  );

  // Animated parallel
  const animateLoop = () => {
    setOnOffState(!onOffState);
    if (onOffState === true) {
      animationLoop.start();
    } else {
      translateY.stopAnimation();
    }
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
        <Button onPress={animateLoop}>{onOffState ? 'Start' : 'Stop'}</Button>
      </View>
    </ScreenWrapper>
  );
};
