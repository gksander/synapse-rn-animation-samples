// Setup screens
import * as React from 'react';
import { InActionView } from './InAction.view';
import { Rotation } from './Rotation.view';

// @HANK - Add screens here. Copy, paste, and tweak accordingly.
// title is the display title.
// path is the router path, just make that unique.
// component is the View
export const INTERPOLATE_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
  {
    title: `See In Action`,
    path: 'InterpolateInAction',
    component: InActionView,
  },
  {
    title: 'Rotation',
    path: 'InterpolateRotation',
    component: Rotation,
  },
];

export const INTERPOLATE_SCREENS_META = INTERPOLATE_SCREENS.map((screen) => ({
  title: screen.title,
  path: screen.path,
}));
