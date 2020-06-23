import * as React from 'react';
import { View, Animated, ScrollView, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../../components/ScreenWrapper';

/**
 * Shoot confetti everywhere
 */
export const ScrollAnimationView: React.FC = () => {
  //used to track current scroll amount
  const scrollValue = React.useRef(new Animated.Value(0)).current;

  //
  const interpolatedBorderRadius = scrollValue.interpolate({
    inputRange: [0, 1000],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });
  const interpolatedBackgroundColor = scrollValue.interpolate({
    inputRange: [0, 250, 500],
    outputRange: ['pink', 'black', 'purple'],
    extrapolate: 'clamp',
  });

  return (
    <ScreenWrapper
      title="Scroll Animation"
      subtitle="See /views/Examples/Love/ScrollAnimation.view.tsx"
    >
      <Animated.View
        style={{
          //backgroundColor is not supported by native driver
          backgroundColor: interpolatedBackgroundColor,
          height: 100,
          width: 100,
          borderRadius: interpolatedBorderRadius,
          position: 'absolute',
          zIndex: 100,
          alignSelf: 'center',
        }}
      />
      <Animated.ScrollView
        style={{ height: '100%', width: '100%', padding: 16 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollValue } } },
        ])}
      >
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
        <View style={styles.whiteBox} />
      </Animated.ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  whiteBox: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 8,
  },
});
