import { placeFree } from '../../src/js/checkFunctions/placeFree';
import { collision } from '../../src/js/checkFunctions/collision';
import { IPlayer } from '../../src/js/interfaces/playerInterface';
import { IWalls } from '../../src/js/interfaces/wallsInteraface';

describe('placeFree', () => {
	let xNew, yNew, player, walls;
	let res;

	beforeEach(() => {
		xNew = 10;
		yNew = 15;
		player = {
			x: 120,
	    y: 70,
	    w: 100,
	    h: 20,
	    c: 35
		};
		walls = {
	    x: 5,
	    y: 5,
	    w: 3,
	    h: 7
	  };
	});

	test('should be defined', () => {
		expect(placeFree).toBeDefined();
		expect(placeFree).toBeTruthy();
		expect(placeFree).not.toBeUndefined();
		expect(placeFree).not.toBeFalsy();
	});

	test('should return boolean value', () => {
		res = true;

		expect(placeFree(xNew, yNew, player, walls)).toBe(res);
	});

	test('result should be defined', () => {
		expect(placeFree(xNew, yNew, player, walls)).toBeTruthy();
		expect(placeFree(xNew, yNew, player, walls)).toBeDefined();
	});
});