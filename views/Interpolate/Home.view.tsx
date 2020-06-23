import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { INTERPOLATE_SCREENS_META } from './Interpolate.config';

export const HomeView: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', margin: 16 }}>
      <Text style={{ fontSize: 21 }}>What is it?</Text>
      <Text style={{ fontWeight: '300' }}>
        <Text style={{ textDecorationLine: 'line-through' }}>
          In the mathematical field of numerical analysis, interpolation is a
          type of estimation,
        </Text>
        <Text style={{ backgroundColor: 'pink' }}>
          {' '}
          a method of constructing new data points within the range of a
          discrete set of known data points. - Wikipedia
        </Text>
      </Text>
      <Text style={{ fontSize: 21, marginTop: 30 }}>Why do I care?</Text>
      <Text style={{ fontWeight: '300' }}>1. Fine tuning of animation.</Text>
      <Text style={{ fontWeight: '300' }}>
        2. Track single animation value instead of multiple
      </Text>
      <Text style={{ fontWeight: '300' }}>3. Dynamic animations</Text>
      {INTERPOLATE_SCREENS_META.map((view) => (
        <TouchableOpacity
          key={view.path}
          onPress={() => navigation.navigate(view.path)}
          style={{
            marginTop: 64,
            padding: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'gray',
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Text style={{ fontSize: 16 }}>{view.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
