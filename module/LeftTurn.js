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

module.exports = {leftTurn}