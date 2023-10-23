import { type Preferences } from '@cooke/types';
import { type PreferencesServiceApi } from './preferences.interface';
import { axiosClient } from '../axios';
import { errorHandler } from '@cooke/utils';

class PreferencesService implements PreferencesServiceApi {
	getPreferences = async (): Promise<Preferences | undefined> =>
		axiosClient
			.get('/preferences')
			.then(res => res.data as Preferences)
			.catch(err => {
				errorHandler(err);
				return undefined;
			});

	putPreference = async (preferences: Preferences): Promise<Preferences> =>
		axiosClient.put('/preferences', { preferences }).then(res => res.data as Preferences);
}

export const preferencesService = new PreferencesService();
