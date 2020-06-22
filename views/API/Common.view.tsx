import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const CommonView: React.FC = () => {
  // Animated translateY value
  const translateY1 = React.useRef(new Animated.Value(0)).current;
  const translateY2 = React.useRef(new Animated.Value(0)).current;
  const [animValue, setAnimValue] = React.useState(100);

  // Animated sequence
  const animateSequence = () => {
    setAnimValue(100 - animValue);
    Animated.sequence([
      Animated.timing(translateY1, {
        toValue: animValue,
        duration: 500,
      }),
      Animated.spring(translateY2, {
        toValue: animValue,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  // Animated stagger
  const animateStagger = () => {
    setAnimValue(100 - animValue);
    Animated.stagger(250, [
      Animated.timing(translateY1, {
        toValue: animValue,
        duration: 500,
      }),
      Animated.spring(translateY2, {
        toValue: animValue,
        friction: 5,
        tension: 40,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  // Animated stagger
  const animateParallel = () => {
    setAnimValue(100 - animValue);
    Animated.parallel([
      Animated.timing(translateY1, {
        toValue: animValue,
        duration: 500,
      }),
      Animated.spring(translateY2, {
        toValue: animValue,
        friction: 5,
        tension: 40,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper
      title="Sequencing Animations"
      subtitle="See /views/API/Sequence.view.tsx"
    >
      <View style={{ width: '80%' }}>
        <View style={{ flexDirection: 'row' }}>
          <Animated.View
            style={[
              styles.balloon,
              {
                transform: [{ translateY: translateY1 }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.balloon,
              {
                transform: [{ translateY: translateY2 }],
              },
            ]}
          />
        </View>
        <View style={{ top: 100 }}>
          <Button onPress={animateSequence}>.sequence()</Button>
          <Button onPress={animateStagger}>.stagger()</Button>
          <Button onPress={animateParallel}>.parallel()</Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  balloon: {
    flex: 1,
    margin: 8,
    height: 50,
    backgroundColor: 'tomato',
  },
});
