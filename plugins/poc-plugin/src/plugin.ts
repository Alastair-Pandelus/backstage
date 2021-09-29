import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pocPluginPlugin = createPlugin({
  id: 'poc-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const PocPluginPage = pocPluginPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
