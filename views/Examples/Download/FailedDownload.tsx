import * as React from 'react';
import { Text, View } from 'react-native';

export const FailedDownload: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>FAILURE</Text>
    </View>
  );
};
