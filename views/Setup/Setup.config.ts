// Setup screens
import * as React from 'react';
import { InitializeView } from './Initialize.view';
import { WhatView } from './What.view';
import { WhenView } from './When.view';
import { WhoView } from './Who.view';

export const SETUP_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
  { title: 'Initialize', path: 'SetupInitialize', component: InitializeView },
  { title: 'What?', path: 'SetupWhat', component: WhatView },
  { title: 'When?', path: 'SetupWhen', component: WhenView },
  { title: 'Who?', path: 'SetupWho', component: WhoView },
];
export const SETUP_SCREENS_META = SETUP_SCREENS.map((screen) => ({
  title: screen.title,
  path: screen.path,
}));
