import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeView } from './Home.view';
import { CoreMethodsView } from './CoreMethods.view';
import { HeaderBack } from '../../components/HeaderBack';
import { HeaderRight } from '../../components/HeaderRight';
import { SequenceView } from './Sequence.view';
import { StaggerView } from './Stagger.view';
import { ParallelView } from './Parallel.view';
import { LoopView } from './Loop.view';

const Stack = createStackNavigator();

// Setup screens
export const API_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
  { title: 'API', path: 'ApiHome', component: HomeView },
  { title: 'Core Methods', path: 'ApiCoreMethods', component: CoreMethodsView },
  { title: 'Sequencing', path: 'ApiSequencing', component: SequenceView },
  { title: 'Staggering', path: 'ApiStaggering', component: StaggerView },
  { title: 'Parallel', path: 'ApiParallel', component: ParallelView },
  { title: 'Loop', path: 'ApiLoop', component: LoopView },
];
export const API_SCREENS_META = API_SCREENS.map((screen) => ({
  title: screen.title,
  path: screen.path,
}));

export const ApiStack: React.FC = () => {
  return (
    <Stack.Navigator>
      {API_SCREENS.map((screen, i) => (
        <Stack.Screen
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
