import { registerPlugin } from '@capacitor/core';

import type { customeCropPlugin } from './definitions';

const customeCrop = registerPlugin<customeCropPlugin>('customeCrop', {
  web: () => import('./web').then(m => new m.customeCropWeb()),
});

export * from './definitions';
export { customeCrop };
