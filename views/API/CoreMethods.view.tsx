import * as React from 'react';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';

export const CoreMethodsView: React.FC = () => {
  // Animated translateY value
  const translateY = React.useRef(new Animated.Value(0)).current;
  const [animValue, setAnimValue] = React.useState(108);

  // Timing
  const animateTiming = () => {
    setAnimValue(108 - animValue);
    Animated.timing(translateY, {
      toValue: animValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Spring
  const animateSpring = () => {
    setAnimValue(108 - animValue);
    Animated.spring(translateY, {
      toValue: animValue,
      friction: 5, // lower the bouncier default at 7
      tension: 60, // higher the faster default at 40

      //spring settings come in sets and can only be used one set at a time
      // speed: 100, // default 12
      // bounciness: 8, // default 8
      useNativeDriver: true,
    }).start();
  };

  // Markup
  return (
    <ScreenWrapper
      title="Core Methods"
      subtitle="See /views/API/CoreMethods.view.tsx"
    >
      <View style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
        <Animated.View
          style={{
            marginHorizontal: 8,
            height: 50,
            backgroundColor: 'tomato',

            transform: [{ translateY }],
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, margin: 8 }}>
            <Button onPress={animateTiming}>.timing()</Button>
          </View>
          <View style={{ flex: 1, margin: 8 }}>
            <Button onPress={animateSpring}>.spring()</Button>
          </View>
        </View>
        <View style={{ top: 50, alignSelf: 'center' }}>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>.decay()</Text>
          <Text style={{ color: 'grey', fontWeight: '300' }}>
            the lost child
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};
