/**
 * Counter reducer
 */
import expect from 'expect';


export function counter(state = 0, action = {}) {

	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		default:
			return state;
	}
}

// TESTING:
expect(
	counter(0, { type: 'INC' })
).toEqual(1);

expect(
	counter(1, { type: 'INC' })
).toEqual(2);

expect(
	counter(2, { type: 'DEC' })
).toEqual(1);

expect(
	counter(1, { type: 'DEC' })
).toEqual(0);

expect(
	counter(/*no state & argument */)
).toEqual(0);

console.log('All test pass');
