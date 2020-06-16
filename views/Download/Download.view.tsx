import * as React from 'react';
import { View, Text } from 'react-native';
import { DownloadButton } from './DownloadButton';
import { FailedDownload } from './FailedDownload';

export const DownloadView: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DownloadButton />
    </View>
  );
};
