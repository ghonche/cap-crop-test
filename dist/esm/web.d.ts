import { WebPlugin } from '@capacitor/core';
import type { customeCropPlugin } from './definitions';
export declare class customeCropWeb extends WebPlugin implements customeCropPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
