import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToastsView } from './views/Toasts/Toasts.view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DownloadView } from './views/Download/Download.view';
import { DashboardView } from './views/Dashboard/Dashboard.view';
import { LoveView } from './views/Love/Love.view';
import { SetupStack } from './views/Setup/Setup.stack';

const Tab = createBottomTabNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            ({
              Setup: 'wrench',
              Dashboard: 'tablet-dashboard',
              Toasts: 'toaster-oven',
              Download: 'download',
              Love: 'heart-outline',
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
      <Tab.Screen name="Setup" component={SetupStack} />
      <Tab.Screen name="Love" component={LoveView} />
      <Tab.Screen name="Dashboard" component={DashboardView} />
      <Tab.Screen name="Download" component={DownloadView} />
      <Tab.Screen name="Toasts" component={ToastsView} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
