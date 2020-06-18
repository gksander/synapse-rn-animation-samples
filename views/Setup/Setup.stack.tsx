import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderRight } from '../../components/HeaderRight';
import { HeaderBack } from '../../components/HeaderBack';
import { SETUP_SCREENS } from './Setup.config';

const Stack = createStackNavigator();

export const SetupStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {SETUP_SCREENS.map((screen, i) => (
        <Stack.Screen
          key={screen.path}
          name={screen.path}
          component={screen.component}
          options={{
            title: screen.title,
            headerLeft: i === 0 ? () => null : () => <HeaderBack />,
            headerRight:
              i === SETUP_SCREENS.length - 1
                ? () => null
                : () => (
                    <HeaderRight
                      path={SETUP_SCREENS[i + 1].path}
                      title={SETUP_SCREENS[i + 1].title}
                    />
                  ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
};
