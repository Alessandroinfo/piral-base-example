import * as React from 'react';
import {createRoot} from 'react-dom/client';
import type {PiletApi} from 'empty-piral';

const Header = React.lazy(() => import('./Header'));

export function setup(app: PiletApi) {
  const root = createRoot(document.getElementById('header'));
  const element = <Header/>;
  root.render(element);
  console.log('Here');
}
