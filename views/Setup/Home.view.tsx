import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Views: { title: string; path: string }[] = [
  { title: 'Initialize', path: 'SetupInitialize' },
  { title: 'What?', path: 'SetupWhat' },
  { title: 'When?', path: 'SetupWhen' },
  { title: 'Who?', path: 'SetupWho' },
];

export const HomeView: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {Views.map((view) => (
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
