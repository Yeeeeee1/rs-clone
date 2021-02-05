import createElement from '../../src/js/modules/createElement';

/*
	- should be defined
	- should return object
	- should be instance of function
*/

describe('createElement', () => {
	let element;

	beforeEach(() => {
		element = createElement('div', 'my-class', null, null, ['min-key', '5']);
	});

	test('should be defined', () => {
		expect(createElement).toBeDefined();
		expect(createElement).toBeTruthy();
		expect(createElement).not.toBeUndefined();
		expect(createElement).not.toBeFalsy();
	});

	test('should return object that instance of Element', () => {
		expect(element).toBeInstanceOf(Element);
	});

	test('should return true value', () => {
		expect(element).toBeDefined();
		expect(element).toBeTruthy();
		expect(!!element).not.toBe(false);
	});
});