// Setup screens
import * as React from 'react';
import { CoreMethodsView } from './CoreMethods.view';
import { SequenceView } from './Sequence.view';
import { StaggerView } from './Stagger.view';
import { ParallelView } from './Parallel.view';
import { LoopView } from './Loop.view';

export const API_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
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

console.log(API_SCREENS_META);
