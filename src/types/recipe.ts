export type LiquidUnit = 'ml' | 'l';

export type WeightUnit = 'g' | 'kg';

export type RelativeUnit = 'unit' | 'cup' | 'tea-spoon' | 'table-spoon';

export type MeasurementUnit = WeightUnit | LiquidUnit | RelativeUnit;

export interface Ingredient {
	name: string;
	amount: number;
	unit: MeasurementUnit;
}

export interface PreparationStep {
	stepCount: number;
	description: string;
}

export interface Recipe {
	id: UUID;
	title: string;
	description: string;
	ingredients: Ingredient[];
	steps: PreparationStep[];
}
