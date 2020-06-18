import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBack } from '../../components/HeaderBack';
import { HeaderRight } from '../../components/HeaderRight';
import { API_SCREENS } from './Api.config';
import { HomeView } from './Home.view';

const Stack = createStackNavigator();

const SCREENS = [{ title: 'API', path: 'ApiHome', component: HomeView }].concat(
  API_SCREENS,
);

export const ApiStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {SCREENS.map((screen, i) => (
        <Stack.Screen
          key={screen.path}
          name={screen.path}
          component={screen.component}
          options={{
            title: screen.title,
            headerLeft: i === 0 ? () => null : () => <HeaderBack />,
            headerRight: () => {
              const nextScreen = SCREENS[i + 1];
              if (!nextScreen) return;
              return (
                <HeaderRight path={nextScreen.path} title={nextScreen.title} />
              );
            },
          }}
        />
      ))}
    </Stack.Navigator>
  );
};
