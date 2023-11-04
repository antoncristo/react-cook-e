export interface QueryBasicParams {
	search?: string;
	enabled?: boolean;
}

export interface QueryGetter {
	isError: boolean;
	isLoading: Boolean;
}
