import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderRight } from '../../components/HeaderRight';
import { HeaderBack } from '../../components/HeaderBack';
import { HomeView } from './Home.view';
import { EXAMPLES_SCREENS } from './Examples.config';

const Stack = createStackNavigator();

const SCREENS = [
  { title: 'Examples', path: 'ExamplesHome', component: HomeView },
].concat(EXAMPLES_SCREENS);

export const ExamplesStack: React.FC = () => {
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
