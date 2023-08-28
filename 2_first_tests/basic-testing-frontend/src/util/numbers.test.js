import { test, expect } from 'vitest';

import { transformToNumber } from './numbers.js';

test('should output be a number if we get number as parameter', () => {
	// Arrange
	const num = 5;

	// Act
	const result = transformToNumber(num);

	// Assert
	expect(result).toBeTypeOf('number');
});

test('should output be a number if we get number as string in parameter', () => {
	// Arrange
	const num = '5555';

	// Act
	const result = transformToNumber(num);

	// Assert
	expect(result).toBeTypeOf('number');
});

test('should output be a minus value if we get minus values in parameter', () => {
	const minusValue = -123;
	const expectedResult = -123;

	const result = transformToNumber(minusValue);

	expect(result).toBe(expectedResult);
});

test('should output be a minus value if we get a minus value as string in parameter', () => {
	const string = '-5';
	const expectedResult = -5;

	const result = transformToNumber(string);

	expect(result).toBe(expectedResult);
});

test('should output be a 0 if we get empty array as parameter', () => {
	const array = [];

	const result = transformToNumber(array);

	expect(result).toBe(0);
});

test('should output be a NaN if we get array with values as parameter', () => {
	const array = [1, 2, 3];

	const result = transformToNumber(array);

	expect(result).toBeNaN();
});

test('should output be NaN if we get object as parameter', () => {
	const array = {};

	const result = transformToNumber(array);

	expect(result).toBeNaN();
});

test('should output be a NaN if we get sring with letter as a pramater', () => {
	const string = '55lorem ipsum';

	const result = transformToNumber(string);

	expect(result).toBeNaN();
});
