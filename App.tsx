import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToastsView } from './views/Toasts/Toasts.view';
import { TestView } from './views/Test.view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Toasts':
              return (
                <MaterialCommunityIcons
                  name="toaster-oven"
                  size={size}
                  color={color}
                />
              );
            default:
              return (
                <MaterialCommunityIcons
                  name="access-point"
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Toasts" component={ToastsView} />
      <Tab.Screen name="Testing" component={TestView} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
