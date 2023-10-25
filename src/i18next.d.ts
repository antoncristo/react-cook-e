import 'i18next';

import type dashboard from '@cooke/providers/localization/resources/en/dashboard.json';
import type wizard from '@cooke/providers/localization/resources/en/wizard.json';
import type profile from '@cooke/providers/localization/resources/en/profile.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			dashboard: typeof dashboard;
			wizard: typeof wizard;
			profile: typeof profile;
		};
	}
}
