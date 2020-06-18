import * as React from 'react';
import { ToastContext, ToastType } from './ToastContainer';
import { StyleSheet, Text, Animated, Easing } from 'react-native';

/**
 * Individual toast
 */
export const Toast: React.FC<{ toast: ToastType; isOldest: boolean }> = ({
  toast,
  isOldest,
}) => {
  // Animation values
  const { toastTranslateY, toastOpacity, toastScale } = useToastAnimation(
    toast.id,
  );

  // Our animated markup
  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity: toastOpacity,
          marginBottom: isOldest ? 0 : 8,
          transform: [
            {
              translateY: toastTranslateY,
            },
            {
              scale: toastScale,
            },
          ],
        },
      ]}
    >
      <Text style={{ fontSize: 18, color: 'white' }}>{toast.message}</Text>
    </Animated.View>
  );
};

/**
 * Handling of toast animation
 */
const useToastAnimation = (id = '') => {
  // Util
  const { clearToastById } = React.useContext(ToastContext);
  const killThisToast = React.useCallback(() => clearToastById(id), [id]);

  // Create an "Animation Value" that we'll animate
  // We will vary this from 0 to 0.5, pause for awhile, then vary from 0.5 to 1.
  const animValue = React.useRef(new Animated.Value(0)).current;
  // TranslateY will vary from -20 to 0 (enter downward), and then from 0 to 20 (exit upward)
  const toastTranslateY = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-20, 0, -20],
  });
  // Opacity will vary from 0 to 1 (enter, become visible), and then from 1 to 0 (exit, disappear)
  const toastOpacity = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
  // Scale will be 1 until it's dismissed, at which point it varies from 1 to 0.8 (shrinks out)
  const toastScale = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1, 0.8],
  });

  // Handle animating and removing the toast afterward
  // The `.start` command takes a callback that runs when animation is finished.
  // Kill the toast once the animation is finished.
  React.useEffect(() => {
    Animated.sequence([
      // Make toast visible
      Animated.timing(animValue, {
        toValue: 0.5,
        duration: 250,
        easing: Easing.ease,
      }),
      // Hang out for 3 seconds
      Animated.delay(3 * 1000),
      // Then animate out
      Animated.timing(animValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.ease,
      }),
    ]).start(killThisToast);

    // Cleanup. If this thing is still alive, kill it.
    return () => (id ? killThisToast() : null);
  }, [killThisToast, id, animValue]);

  // Pass back the animation values for the component to use.
  return { toastTranslateY, toastOpacity, toastScale };
};

const styles = StyleSheet.create({
  toast: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'red',
    borderRadius: 30,
  },
});
