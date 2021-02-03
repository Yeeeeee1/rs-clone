import { collision } from '../../src/js/checkFunctions/collision';
import { IWalls } from '../../src/js/interfaces/wallsInteraface';

describe('Colission', () => {
	let r1: IWalls = {
    x: 5,
    y: 5,
    w: 3,
    h: 7
  };
	let r2: IWalls = {
    x: 7,
    y: 5,
    w: 4,
    h: 7
  };

	beforeEach(() => {
		r1 = {
	    x: 5,
	    y: 5,
	    w: 3,
	    h: 7,
	  };
	  r2 = {
	    x: 7,
	    y: 5,
	    w: 4,
	    h: 7,
	  };
	});

	test('should be defined', () => {
		expect(collision).toBeDefined();
		expect(collision).toBeTruthy();
		expect(collision).not.toBeUndefined();
		expect(collision).not.toBeFalsy();
	});

	test('should return boolean value', () => {
		expect(collision(r1, r2)).toBe(true);
		expect(collision(r1, r2)).toBeTruthy();
		expect(collision(r1, r2)).not.toBe(false);
	});

});