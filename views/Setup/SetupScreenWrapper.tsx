import * as React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Text, View } from 'react-native';

export const SetupScreenWrapper: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle = '', children }) => {
  return (
    <View style={{ flex: 1 }}>
      <PageTitle>{title}</PageTitle>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </View>
    </View>
  );
};
