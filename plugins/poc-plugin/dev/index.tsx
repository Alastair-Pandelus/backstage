import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pocPluginPlugin, PocPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pocPluginPlugin)
  .addPage({
    element: <PocPluginPage />,
    title: 'Root Page',
    path: '/poc-plugin'
  })
  .render();
