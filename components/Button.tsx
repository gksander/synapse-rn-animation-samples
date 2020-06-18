import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button: React.FC<{ onPress: () => any }> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 16 }}>{children}</Text>
    </TouchableOpacity>
  );
};
