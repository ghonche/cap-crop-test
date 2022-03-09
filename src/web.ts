import { WebPlugin } from '@capacitor/core';

import type { customeCropPlugin } from './definitions';

export class customeCropWeb extends WebPlugin implements customeCropPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
