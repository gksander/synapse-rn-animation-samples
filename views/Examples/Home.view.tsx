import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EXAMPLES_SCREENS_META } from './Examples.config';

export const HomeView: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {EXAMPLES_SCREENS_META.map((view) => (
        <TouchableOpacity
          key={view.path}
          onPress={() => navigation.navigate(view.path)}
          style={{
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'gray',
            borderWidth: StyleSheet.hairlineWidth,
            marginVertical: 5,
            marginHorizontal: 5,
          }}
        >
          <Text style={{ fontSize: 16 }}>{view.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
