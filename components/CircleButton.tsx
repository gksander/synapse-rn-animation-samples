import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const SIZE = 100;

export const CircleButton: React.FC<TouchableOpacityProps> = ({
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        rest.style,
        {
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        },
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};
