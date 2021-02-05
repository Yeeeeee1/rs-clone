import { isSpike } from '../../src/js/checkFunctions/isSpike';
import { IPlayer } from '../../src/js/interfaces/playerInterface';
import { ISpikes } from '../../src/js/interfaces/spikesInterface.ts';

describe('isSpike', () => {
	let somePlayer: IPlayer = {
		x: 120,
    y: 70,
    w: 100,
    h: 20,
    c: 35
	};

	let someSpikes: IPlayer = {
		x: 60,
    y: 220
	};

	beforeEach(() => {
		somePlayer = {
			x: 120,
	    y: 70,
	    w: 100,
	    h: 20,
	    c: 35
		};
		someSpikes = {
			x: 60,
	    y: 220
		};
	});

	test('should be defined', () => {
		expect(isSpike(somePlayer, someSpikes)).toBeDefined();
		expect(isSpike(somePlayer, someSpikes)).not.toBeUndefined();
	});

	test('should return object', () => {
		const result = { 
			isSpikes: false,
      startGame: false 
    };

		expect(isSpike(somePlayer, someSpikes)).toEqual(result);
	});

	test('should have properties', () => {
		const obj = isSpike(somePlayer, someSpikes);

		expect(obj).toHaveProperty('isSpikes');
		expect(obj).toHaveProperty('startGame');
	});

});