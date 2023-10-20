import { setConfig, type ConfigAdapter } from '../../adapters/config';
import fs from 'fs';

class Config implements ConfigAdapter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	config: any;

	public load(filePath: string): void {
		this.config = JSON.parse(fs.readFileSync(filePath, 'utf8'));
	}

	public get(key: string): unknown {
		return this.config[key];
	}
}

setConfig(new Config());
