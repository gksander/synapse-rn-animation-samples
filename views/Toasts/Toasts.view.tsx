import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ToastContainer, ToastContext } from './ToastContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TOAST_MESSAGES } from './messages';
import { Toast } from './Toast';

/**
 * Animated toasts
 */
export const ToastsViewBody: React.FC = () => {
  const { toastsAsArray, createToast } = React.useContext(ToastContext);

  return (
    <React.Fragment>
      {/* Toast containter */}
      <SafeAreaView
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          flexDirection: 'column-reverse',
          alignItems: 'center',
        }}
      >
        {toastsAsArray.map((toast, i) => (
          <Toast toast={toast} key={toast.id} isOldest={i === 0} />
        ))}
      </SafeAreaView>

      {/* Button to create toast */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            createToast(
              TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)],
            );
          }}
        >
          <Text style={{ fontSize: 24 }}>Slap it!</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export const ToastsView = () => (
  <ToastContainer>
    <ToastsViewBody />
  </ToastContainer>
);
