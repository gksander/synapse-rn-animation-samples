import * as React from 'react';
import { Text, View } from 'react-native';

export const PageTitle: React.FC = ({ children }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <Text style={{ fontSize: 32 }}>{children}</Text>
    </View>
  );
};
