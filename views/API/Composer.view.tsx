import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const ComposerView: React.FC = () => {
  // Animated translateY value
  const translateY1 = React.useRef(new Animated.Value(0)).current;
  const translateY2 = React.useRef(new Animated.Value(0)).current;
  const [destinationValue, setDestinationValue] = React.useState(100);

  // Collection of animations that we'll run "composed"
  const coreAnimations = [
    // linearly animate translateY1
    Animated.timing(translateY1, {
      toValue: destinationValue,
      duration: 500,
    }),
    // And spring translateY2
    Animated.spring(translateY2, {
      toValue: destinationValue,
    }),
  ];

  // Animated sequence
  const animateSequence = () => {
    setDestinationValue(100 - destinationValue);
    Animated.sequence(coreAnimations).start(); // DONT FORGET TO START IT!
  };

  // Animated stagger
  const animateStagger = () => {
    setDestinationValue(100 - destinationValue);
    Animated.stagger(250, coreAnimations).start(); // DONT FORGET TO START IT!
  };

  // Animated parallel
  const animateParallel = () => {
    setDestinationValue(100 - destinationValue);
    Animated.parallel(coreAnimations).start(); // DONT FORGET TO START IT!
  };

  return (
    <ScreenWrapper
      title="Sequencing Animations"
      subtitle="See /views/API/Composer.view.tsx"
    >
      <View style={{ width: '80%' }}>
        <View style={{ flexDirection: 'row' }}>
          {/* Linearly animated */}
          <Animated.View
            style={[
              styles.balloon,
              {
                transform: [{ translateY: translateY1 }],
              },
            ]}
          />
          {/* Spring animated */}
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
