import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBack } from '../../components/HeaderBack';
import { HeaderRight } from '../../components/HeaderRight';
import { API_SCREENS } from './Api.config';
import { HomeView } from './Home.view';

const Stack = createStackNavigator();

export const ApiStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {[{ title: 'API', path: 'ApiHome', component: HomeView }]
        .concat(API_SCREENS)
        .map((screen, i) => (
          <Stack.Screen
            key={screen.path}
            name={screen.path}
            component={screen.component}
            options={{
              title: screen.title,
              headerLeft: i === 0 ? () => null : () => <HeaderBack />,
              headerRight:
                i === API_SCREENS.length - 1
                  ? () => null
                  : () => (
                      <HeaderRight
                        path={API_SCREENS[i + 1].path}
                        title={API_SCREENS[i + 1].title}
                      />
                    ),
            }}
          />
        ))}
    </Stack.Navigator>
  );
};
