import * as React from 'react';
import { Text, View, Animated } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';

/**
 * Get things setup
 */
const Balloon: React.FC = () => {
  // Create an animated value
  const animValue = React.useRef(new Animated.Value(0)).current;

  // Do stuff...
  return null;
};

/**
 * Class component, if you're into that.
 */
class OtherBalloon extends React.Component<any, any> {
  state = {
    animValue: new Animated.Value(0),
  };
}

/**
 * Our view
 */
export const InitializeView: React.FC = () => {
  return (
    <ScreenWrapper
      title="Initialize"
      subtitle="See views/Setup/Initialize.view.tsx"
    >
      <View style={{}}>
        <Text>1. Your Imports</Text>
        <Text>2. Your const/values</Text>
      </View>
      <Balloon />
    </ScreenWrapper>
  );
};
