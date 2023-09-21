enum unauthenticatedPathNames {
	LOGIN = '/login',
	NOT_FOUND = '*'
}

enum authenticatedPathNames {
	DASHBOARD = '/dashboard',
	CREATE_RECIPE = '/recipe',
	READ_RECIPE = '/recipe/:recipeid',
	EDIT_RECIPE = '/edit/:recipeid',
	FAVORITES = '/favorites'
}

export const cookePathnames = {
	unauthenticatedPathNames,
	authenticatedPathNames
};

export const injectRecipeUUID = (dynamicPathName: string, recipeUUID: UUID) =>
	dynamicPathName.replace(':recipeid', recipeUUID);
