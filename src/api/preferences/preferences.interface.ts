import { type Preferences } from '@cooke/types';

export interface PreferencesServiceApi {
	getPreferences: () => Promise<Preferences | undefined>;
	putPreference: (update: Preferences) => Promise<Preferences>;
}
