import { type Preferences } from '@cooke/types';

export interface PreferencesServiceApi {
	getPreferences: () => Promise<Preferences>;
	putPreference: (update: Preferences) => Promise<Preferences>;
}
