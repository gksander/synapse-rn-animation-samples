import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const InActionView: React.FC = () => {
  // Animated translateY value
  const animationRef = React.useRef(new Animated.Value(0)).current;
  const [animationComplete, setAnimationComplete] = React.useState(false);

  const runAnimation = () => {
    if (animationComplete === false) {
      Animated.timing(animationRef, {
        toValue: 1,
        duration: 1000,
      }).start(() => setAnimationComplete(true)); // DONT FORGET TO START IT!
    } else {
      animationRef.setValue(0);
      setAnimationComplete(false);
    }
  };

  const leftBaloonTranslate = animationRef.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [100, -80, 200],
  });
  const rightBaloonTranslate = animationRef.interpolate({
    inputRange: [0, 0.2, 0.5, 1],
    outputRange: [100, 100, -80, 200],
  });

  return (
    <ScreenWrapper
      title="Interpolation Example"
      subtitle="See /views/Interpolate/InAction"
    >
      <View style={{ width: '80%' }}>
        <View style={{ flexDirection: 'row' }}>
          <Animated.View
            style={[
              styles.balloon,
              {
                transform: [{ translateY: leftBaloonTranslate }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.balloon,
              {
                transform: [{ translateY: rightBaloonTranslate }],
              },
            ]}
          />
        </View>
        <View style={{ top: 100 }}>
          <Button onPress={runAnimation}>
            {animationComplete ? 'Reset' : 'Animate'}
          </Button>
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
