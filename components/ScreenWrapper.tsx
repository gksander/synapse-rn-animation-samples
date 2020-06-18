import * as React from 'react';
import { Text, View } from 'react-native';

export const ScreenWrapper: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle = '', children }) => {
  return (
    <View style={{ flex: 1, paddingTop: 16 }}>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <Text style={{ fontSize: 36 }}>{title}</Text>
        {Boolean(subtitle) && <Text style={{ color: 'gray' }}>{subtitle}</Text>}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </View>
    </View>
  );
};
