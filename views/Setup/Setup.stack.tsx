import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InitializeView } from './Initialize.view';
import { HomeView } from './Home.view';
import { HeaderRight } from '../../components/HeaderRight';
import { HeaderBack } from '../../components/HeaderBack';
import { WhatView } from './What.view';
import { WhenView } from './When.view';
import { WhoView } from './Who.view';

const Stack = createStackNavigator();

// Setup screens
export const SETUP_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
  { title: 'Setup', path: 'SetupHome', component: HomeView },
  { title: 'Initialize', path: 'SetupInitialize', component: InitializeView },
  { title: 'What?', path: 'SetupWhat', component: WhatView },
  { title: 'When?', path: 'SetupWhen', component: WhenView },
  { title: 'Who?', path: 'SetupWho', component: WhoView },
];
export const SETUP_SCREENS_META = SETUP_SCREENS.map((screen) => ({
  title: screen.title,
  path: screen.path,
}));

export const SetupStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {SETUP_SCREENS.map((screen, i) => (
        <Stack.Screen
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
