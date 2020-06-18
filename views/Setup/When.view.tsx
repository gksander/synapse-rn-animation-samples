import * as React from 'react';
import { Animated, Easing } from 'react-native';
import { SetupScreenWrapper } from './SetupScreenWrapper';

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
  React.useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
    }).start();
  }, []);

  // Do stuff...
  return null;
};

// Our view
export const WhenView: React.FC = () => {
  return (
    <SetupScreenWrapper title="When?">
      <Balloon />
    </SetupScreenWrapper>
  );
};
