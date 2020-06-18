import * as React from 'react';
import { View, Text } from 'react-native';
import { DownloadButton } from './DownloadButton';
import { FailedDownload } from './FailedDownload';
import { ScreenWrapper } from '../../../components/ScreenWrapper';

export const DownloadView: React.FC = () => {
  return (
    <ScreenWrapper
      title="Download Button"
      subtitle="See /views/Examples/Download/Download.view.tsx"
    >
      <DownloadButton />
    </ScreenWrapper>
  );
};
