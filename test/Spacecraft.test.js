const { expect } = require('chai');
const Spacecraft = require('../module/Spacecraft').Spacecraft;

describe('Spacecraft', () => {
    it('For Forward', () => {
        const commands = ['f'];

        const start = {
            coordinates: [0, 0, 0],
            direction: 'N',
        };
        const expected = {
            coordinates: [0, 1, 0],
            direction: 'N',
        };

        const output = Spacecraft(commands, start);
        expect(output).to.deep.equal(expected);
    });
});