export const recordUpdate = <T>(record: T, key: keyof T, update: ValueOf<T>): T => {
	const copyOfRecord: T = JSON.parse(JSON.stringify(record));
	const copyOfUpdate: ValueOf<T> = JSON.parse(JSON.stringify(update));

	copyOfRecord[key] = copyOfUpdate;

	return copyOfRecord;
};
