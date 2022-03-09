import { registerPlugin } from '@capacitor/core';
const customeCrop = registerPlugin('customeCrop', {
    web: () => import('./web').then(m => new m.customeCropWeb()),
});
export * from './definitions';
export { customeCrop };
//# sourceMappingURL=index.js.map