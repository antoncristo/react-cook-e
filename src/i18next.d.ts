import 'i18next';

import type dashboard from '@cooke/providers/localization/resources/en/dashboard.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			dashboard: typeof dashboard;
		};
	}
}
