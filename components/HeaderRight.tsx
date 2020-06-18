import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HeaderRight: React.FC<{ title?: string; path: string }> = ({
  title = 'Next',
  path,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(path)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
      }}
    >
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <MaterialCommunityIcons name="chevron-right" size={20} />
    </TouchableOpacity>
  );
};
