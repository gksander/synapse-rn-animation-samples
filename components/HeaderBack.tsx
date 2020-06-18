import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HeaderBack: React.FC<{ title?: string }> = ({
  title = 'Back',
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
      }}
    >
      <MaterialCommunityIcons name="chevron-left" size={20} />
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};
