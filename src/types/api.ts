export interface QueryControl {
	enabled?: boolean;
}

export interface QueryBasicParams {
	search?: string;
}

export interface QueryGetter {
	isError: boolean;
	isLoading: Boolean;
}
