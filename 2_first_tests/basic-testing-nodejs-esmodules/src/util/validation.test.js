import { test, expect, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation.js';

describe('validateStringNotEmpty()', () => {
	test('should throw error for empty string', () => {
		const input = '';
		const resultFn = () => validateStringNotEmpty(input);
		expect(resultFn).toThrow('Invalid input - must not be empty.');
	});

	test('should throw error for string with only whitespaces', () => {
		const input = '          ';
		const resultFn = () => validateStringNotEmpty(input);
		expect(resultFn).toThrow('Invalid input - must not be empty.');
	});

	test('should not throw error for string with letter', () => {
		const input = 's';
		const resultFn = () => validateStringNotEmpty(input);
		expect(resultFn).not.toThrow('Invalid input - must not be empty.');
	});

	test('should not throw error for number', () => {
		const input = 5;
		const resultFn = () => validateStringNotEmpty(input);
		expect(resultFn).not.toThrow();
	});

	test('should throw error for non transformable values', () => {
		const input1 = [];
		const input2 = {};
		const resultFn1 = () => validateStringNotEmpty(input1);
		const resultFn2 = () => validateStringNotEmpty(input2);
		expect(resultFn1).toThrow();
		expect(resultFn2).toThrow();
	});
});

describe('validateNumber()', () => {
	test('should throw error for string', () => {
		const input = 'lorem ipsum';
		const resultFn = () => validateNumber(input);
		expect(resultFn).toThrow();
	});

	test('should not throw error for number', () => {
		const input = 5;
		const resultFn = () => validateNumber(input);
		expect(resultFn).not.toThrow();
	});

	test('should not throw error for minus values', () => {
		const input1 = -1;
		const resultFn1 = () => validateNumber(input1);
		expect(resultFn1).not.toThrow();
	});

	test('should throw an error if a non-numeric value is provided', () => {
		const input = '1';
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow();
	});
});
