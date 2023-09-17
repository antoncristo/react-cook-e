export const recordUpdate = <T>(record: T, key: keyof T, update: ValueOf<T>): T => {
	const copyOfRecord: T = JSON.parse(JSON.stringify(record));

	copyOfRecord[key] = update;

	return copyOfRecord;
};
