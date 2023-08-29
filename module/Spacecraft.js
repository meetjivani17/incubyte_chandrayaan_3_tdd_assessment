function moveForward(Position, Direction) {
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


function Spacecraft(commands, start) {
    let direction = start.direction;
    let coordinates = start.coordinates;

    for (let i = 0; i < commands.length; i++) {
        let c = commands[i];
        if (c === "f") {
            coordinates = moveForward(coordinates, direction);
        }
    }
    return { coordinates, direction };
}

module.exports = { Spacecraft };