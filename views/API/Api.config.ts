// Setup screens
import * as React from 'react';
import { CoreMethodsView } from './CoreMethods.view';
import { CommonView } from './Common.view';
import { LoopView } from './Loop.view';
import { DelayView } from './Delay.view';
import { DiffClampView } from './DiffClamp.view';

// @HANK - Add screens here. Copy, paste, and tweak accordingly.
// title is the display title.
// path is the router path, just make that unique.
// component is the View
export const API_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
  {
    title: `Core ${'\n'} .timing()${'\n'} .spring() ${'\n'} .delay()`,
    path: 'ApiCoreMethods',
    component: CoreMethodsView,
  },
  {
    title: `Common ${'\n'} .sequence()${'\n'} .stagger()${'\n'} .parallel()`,
    path: 'ApiCommonView',
    component: CommonView,
  },
  { title: 'Loop', path: 'ApiLoop', component: LoopView },
  { title: 'Delay', path: 'ApiDelay', component: DelayView },
  { title: 'DiffClamp', path: 'ApiDiffClamp', component: DiffClampView },
];

export const API_SCREENS_META = API_SCREENS.map((screen) => ({
  title: screen.title,
  path: screen.path,
}));
