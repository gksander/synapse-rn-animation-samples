import * as React from 'react';
import { Animated, Easing } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';

/**
 * Balloon component
 */
const Balloon: React.FC = () => {
  // Create an animated value
  const animValue = React.useRef(new Animated.Value(0)).current;

  /**
   * What will the animation do?
   */
  Animated.timing(animValue, {
    toValue: 1,
    duration: 1500,
    easing: Easing.ease,
  }).start();

  // Do stuff...
  return null;
};

// Our view
export const WhatView: React.FC = () => {
  return (
    <ScreenWrapper title="What?" subtitle="See views/Setup/What.view.tsx">
      <Balloon />
    </ScreenWrapper>
  );
};
