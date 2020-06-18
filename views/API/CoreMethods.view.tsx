import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';

export const CoreMethodsView: React.FC = () => {
  // Animated translateY value
  const translateY = React.useRef(new Animated.Value(0)).current;

  // Timing
  const animateTiming = () => {
    translateY.setValue(0);
    Animated.timing(translateY, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Spring
  const animateSpring = () => {
    translateY.setValue(0);
    Animated.spring(translateY, {
      toValue: -100,
      useNativeDriver: true,
    }).start();
  };

  // Markup
  return (
    <ScreenWrapper
      title="Core Methods"
      subtitle="See /views/API/CoreMethods.view.tsx"
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
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={animateTiming}>Animate.timing</Button>
          <Button onPress={animateSpring}>Animate.spring</Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};
