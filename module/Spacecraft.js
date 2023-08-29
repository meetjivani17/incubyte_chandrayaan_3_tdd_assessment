function forward(Position, Direction) {
    let Coordinates = Position;

    if (Direction == "N") {
        Coordinates[1]++;
        return Coordinates;
    }
    else if (Direction == "S") {
        Coordinates[1]--;
        return Coordinates;
    }
    else if (Direction == "E") {
        Coordinates[0]++;
        return Coordinates;
    }
    else if (Direction == "W") {
        Coordinates[0]--;
        return Coordinates;
    }
    else if (Direction == "U") {
        Coordinates[2]++;
        return Coordinates;
    }
    else if (Direction == "D") {
        Coordinates[2]--;
        return Coordinates;
    }
}

function backward(Position, Direction) {
    let Coordinates = Position;

    if (Direction == "N") {
        Coordinates[1]--;
        return Coordinates;
    }
    else if (Direction == "S") {
        Coordinates[1]++;
        return Coordinates;
    }
    else if (Direction == "E") {
        Coordinates[0]--;
        return Coordinates;
    }
    else if (Direction == "W") {
        Coordinates[0]++;
        return Coordinates;
    }
    else if (Direction == "U") {
        Coordinates[2]--;
        return Coordinates;
    }
    else if (Direction == "D") {
        Coordinates[2]++;
        return Coordinates;
    }
}

function leftTurn(Direction) {
    if (Direction === "N") {
        return "W";
    }
    else if (Direction === "S") {
        return "E";
    }
    else if (Direction === "E") {
        return "N";
    }
    else if (Direction === "W") {
        return "S";
    }
    else if (Direction === "U") {
        return "W";
    }
    else if (Direction === "D") {
        return "E";
    }

}

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
    }
    return { coordinates, direction };
}

module.exports = { Spacecraft };