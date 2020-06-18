// Setup screens
import * as React from 'react';
import { DownloadView } from './Download/Download.view';
import { ToastsView } from './Toasts/Toasts.view';
import { LoveView } from './Love/Love.view';

// @HANK - Add screens here. Copy, paste, and tweak accordingly.
// title is the display title.
// path is the router path, just make that unique.
// component is the View
export const EXAMPLES_SCREENS: {
  title: string;
  path: string;
  component: React.FC;
}[] = [
  { title: 'Download', path: 'ExamplesDownload', component: DownloadView },
  { title: 'Toasts', path: 'ExamplesToasts', component: ToastsView },
  { title: 'Love Horn', path: 'ExampleLoveHorn', component: LoveView },
];

export const EXAMPLES_SCREENS_META = EXAMPLES_SCREENS.map((screen) => ({
  title: screen.title,
  path: screen.path,
}));
