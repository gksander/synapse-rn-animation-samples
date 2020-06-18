import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_SCREENS_META } from './Api.config';

export const HomeView: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {API_SCREENS_META.map((view) => (
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
