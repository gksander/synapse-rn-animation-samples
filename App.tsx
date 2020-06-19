import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Intro } from './views/Introduction/Intro.view';
import { SetupStack } from './views/Setup/Setup.stack';
import { ApiStack } from './views/API/Api.stack';
import { ExamplesStack } from './views/Examples/Examples.stack';
import { InterpolateHomeView } from './views/Interpolate/InterpolateHome.view';

const Tab = createBottomTabNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            ({
              Setup: 'wrench',
              API: 'cogs',
              Examples: 'sitemap',
              Interpolation: 'chart-bell-curve',
            } as any)[route.name as any] || 'access-point';

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Intro" component={Intro} />
      <Tab.Screen name="Setup" component={SetupStack} />
      <Tab.Screen name="API" component={ApiStack} />
      <Tab.Screen name="Interpolation" component={InterpolateHomeView} />
      <Tab.Screen name="Examples" component={ExamplesStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
