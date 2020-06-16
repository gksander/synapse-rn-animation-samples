import * as React from 'react';
import { View, Animated, ActivityIndicator, Easing } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CircleButton } from './CircleButton';
import { wait } from '../../utils/wait';

// Create animated icon
const AnimIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

// Possible statuses
const STATUS_HASH = {
  READY: 'READY',
  WORKING: 'WORKING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

/**
 * Success download
 */
export const DownloadButton: React.FC = () => {
  // Animation value for pressIn/Out
  const pressAnimVal = React.useRef(new Animated.Value(0)).current;
  // We'll translate the download icon down/up
  const pressTranslateY = pressAnimVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 8],
  });

  // Success/failure animation value.
  const resultAnimVal = React.useRef(new Animated.Value(0)).current;
  // On failure, we're gonna shake horizontally, so interpolate accordingly
  const failureTranslateX = resultAnimVal.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, 10, -10, 2, 0],
  });
  // On success, we're gonna hop up, and then fall down.
  const successTranslateY = resultAnimVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -10, 0],
  });

  // Local state
  const [status, setStatus] = React.useState(STATUS_HASH.READY);
  const statusTimeout = React.useRef<ReturnType<typeof setTimeout>>();

  // Temporarily set status
  const temporarilySetStatus = (status: string) => {
    setStatus(status);
    statusTimeout.current = setTimeout(
      () => setStatus(STATUS_HASH.READY),
      2000,
    );
  };

  // Cleanup timeout
  React.useEffect(() => {
    return () => {
      if (statusTimeout.current) clearTimeout(statusTimeout.current);
    };
  }, []);

  // On pressIn, animate from 0 to 1
  const onPressIn = () => {
    pressAnimVal.setValue(0);
    Animated.timing(pressAnimVal, {
      toValue: 1,
      duration: 100,
    }).start();
  };

  // On pressOut, animate back to 0
  const onPressOut = () => {
    Animated.timing(pressAnimVal, {
      toValue: 0,
      duration: 100,
    }).start();
  };

  // On press, start download
  const onPress = async () => {
    // Animate the download icon back up, and then do the work.
    Animated.timing(pressAnimVal, {
      toValue: 0,
      duration: 100,
    }).start(async () => {
      // Set the status to working for 2 seconds
      setStatus(STATUS_HASH.WORKING);
      await wait(2000);

      // Randomly choose between success/failure
      const didFail = Math.random() < 0.5;
      resultAnimVal.setValue(0);

      // If we failed...
      if (didFail) {
        temporarilySetStatus(STATUS_HASH.FAILED);
        // Animate resultAnimValue from 0 to 1, linearly (to cause X to shake horizontally)
        Animated.timing(resultAnimVal, {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
        }).start();
      }
      // If we succeeded....
      else {
        temporarilySetStatus(STATUS_HASH.SUCCEEDED);
        // Sequence some things:
        Animated.sequence([
          // Bring the checkmark up...
          Animated.timing(resultAnimVal, {
            toValue: 0.5,
            duration: 150,
            easing: Easing.linear,
          }),
          // Wait for a bit...
          Animated.delay(200),
          // And drop it down with a bounce...
          Animated.timing(resultAnimVal, {
            toValue: 1,
            // duration: 150,
            easing: Easing.bounce,
          }),
        ]).start();
      }
    });
  };

  /**
   * Button markup
   */
  return (
    <CircleButton
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      activeOpacity={0.5}
      disabled={status !== STATUS_HASH.READY}
    >
      {(() => {
        switch (status) {
          // Ready: show download icon
          case STATUS_HASH.READY: {
            return (
              <AnimIcon
                name="cloud-download"
                size={50}
                color="black"
                style={{
                  transform: [{ translateY: pressTranslateY }],
                }}
              />
            );
          }
          // Working
          case STATUS_HASH.WORKING: {
            return <ActivityIndicator />;
          }
          // On success: show check
          case STATUS_HASH.SUCCEEDED: {
            return (
              <AnimIcon
                name="check-bold"
                size={50}
                color="green"
                style={{
                  transform: [{ translateY: successTranslateY }],
                }}
              />
            );
          }
          // On failure: show X
          case STATUS_HASH.FAILED: {
            return (
              <AnimIcon
                name="skull-crossbones"
                size={50}
                color="red"
                style={{
                  transform: [{ translateX: failureTranslateX }],
                }}
              />
            );
          }
        }
      })()}
    </CircleButton>
  );
};
