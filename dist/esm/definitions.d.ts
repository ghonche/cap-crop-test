export interface customeCropPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
