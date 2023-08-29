const forward = require('./Forward').forward
const backward = require('./Backward').backward
const leftTurn = require('./LeftTurn').leftTurn
const rightTurn = require('./RightTurn').rightTurn
const upTurn = require('./UpTurn').upTurn
const downTurn = require('./DownTurn').downTurn

function Spacecraft(commands, start) {
    let direction = start.direction;
    let coordinates = start.coordinates;

    for (let i = 0; i < commands.length; i++) {
        let c = commands[i];
        if (c === "f") {
            coordinates = forward(coordinates, direction);
        }
        else if (c === "b") {
            coordinates = backward(coordinates, direction);
        }
        else if (c === "l") {
            direction = leftTurn(direction);
        }
        else if (c === "r") {
            direction = rightTurn(direction);
        }
        else if (c === "d") {
            direction = downTurn(direction);
        }
        else if (c === "u") {
            direction = upTurn(direction);
        }
    }
    return { coordinates, direction };
}

module.exports = { Spacecraft };