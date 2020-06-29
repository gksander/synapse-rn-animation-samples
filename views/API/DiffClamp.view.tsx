import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const DiffClampView: React.FC = () => {
  // Animated values
  const translateY = React.useRef(new Animated.Value(0)).current;

  // Animated delay
  const animateDiffClamp = () => {
    translateY.setValue(0);

    Animated.sequence([
      // Bring up...
      Animated.timing(translateY, {
        toValue: -250,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.delay(1000),

      // And drop it down!
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(); // DONT FORGET TO START IT!
  };

  // A clamped version! Won't go below -100!
  const clampedTranslateY = Animated.diffClamp(translateY, -100, 0);

  return (
    <ScreenWrapper title="Clamps" subtitle="See /views/API/DiffClamp.view.tsx">
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Animated.View
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'tomato',
              marginHorizontal: 8,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ translateY }],
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              NORMAL!
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              width: 100,
              height: 50,
              backgroundColor: 'tomato',
              marginHorizontal: 8,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ translateY: clampedTranslateY }],
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              CLAMPED!
            </Text>
          </Animated.View>
        </View>
        <Button onPress={animateDiffClamp}>Animate it!</Button>
      </View>
    </ScreenWrapper>
  );
};
