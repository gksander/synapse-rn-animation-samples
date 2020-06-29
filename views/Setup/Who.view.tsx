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
   * WHEN will the animation run?
   * In this case, on mount.
   */

  // Do stuff...
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
        opacity: animValue,
      }}
    />
  );
};

// Our view
export const WhoView: React.FC = () => {
  return (
    <ScreenWrapper title="Who?" subtitle="See views/Setup/Who.view.tsx">
      <Balloon />
    </ScreenWrapper>
  );
};
