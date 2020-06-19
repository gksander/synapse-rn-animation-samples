import * as React from 'react';
import { Text, TouchableOpacity, Animated, Easing, View } from 'react-native';
import { useAnimation } from '../AnimationHooks/useAnimation';

export const Intro: React.FC = () => {
  const { animation, interpolate } = useAnimation();

  return (
    <>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          alignSelf: 'center',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center' }}>
          React Native Animation
        </Text>
        <Animated.View
          style={{
            opacity: interpolate({ outputFinal: 1 }),
            top: 50,
            transform: [
              {
                translateY: interpolate({ outputInitial: 50, outputFinal: 0 }),
              },
            ],
          }}
        >
          <Text
            style={{ textAlign: 'center', lineHeight: 16, marginBottom: 15 }}
          >
            This show is{'\n '} sponsored and brought to you by
          </Text>
          <Text style={{ fontSize: 36, fontWeight: '900' }}>Grant Sander</Text>
        </Animated.View>
      </View>
      <TouchableOpacity
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
          }).start();
        }}
        style={{ flex: 1 }}
      ></TouchableOpacity>
    </>
  );
};
