import { type Preferences } from '@cooke/types';
import { type PreferencesServiceApi } from './preferences.interface';
import { axiosClient } from '../axios';

class PreferencesService implements PreferencesServiceApi {
	getPreferences = async (): Promise<Preferences> =>
		axiosClient.get('/preferences').then(res => res.data as Preferences);
}

export const preferencesService = new PreferencesService();
