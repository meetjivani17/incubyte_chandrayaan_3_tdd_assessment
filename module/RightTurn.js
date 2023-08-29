function rightTurn(Direction) {
    if (Direction === "N") {
        return "E";
    }
    else if (Direction === "S") {
        return "W";
    }
    else if (Direction === "E") {
        return "S";
    }
    else if (Direction === "W") {
        return "N";
    }
    else if (Direction === "U") {
        return "E";
    }
    else if (Direction === "D") {
        return "W";
    }
}

module.exports = { rightTurn }