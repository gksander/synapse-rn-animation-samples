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

export const SetupStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {/* Home view */}
      <Stack.Screen
        name="SetupHome"
        component={HomeView}
        options={{
          title: 'Setup',
          headerRight: () => (
            <HeaderRight path="SetupInitialize" title="Initialize" />
          ),
        }}
      />
      {/* Initializing */}
      <Stack.Screen
        name="SetupInitialize"
        component={InitializeView}
        options={{
          title: 'Initialize',
          headerLeft: ({ label }) => <HeaderBack />,
          headerRight: () => <HeaderRight path="SetupWhat" title="What?" />,
        }}
      />
      {/* What? */}
      <Stack.Screen
        name="SetupWhat"
        component={WhatView}
        options={{
          title: 'What?',
          headerLeft: ({ label }) => <HeaderBack />,
          headerRight: () => <HeaderRight path="SetupWhen" title="When?" />,
        }}
      />
      {/* When? */}
      <Stack.Screen
        name="SetupWhen"
        component={WhenView}
        options={{
          title: 'When?',
          headerLeft: ({ label }) => <HeaderBack />,
          headerRight: () => <HeaderRight path="SetupWho" title="Who?" />,
        }}
      />
      {/* Who? */}
      <Stack.Screen
        name="SetupWho"
        component={WhoView}
        options={{
          title: 'Who?',
          headerLeft: ({ label }) => <HeaderBack />,
        }}
      />
    </Stack.Navigator>
  );
};
