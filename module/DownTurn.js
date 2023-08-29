function downTurn(Direction) {
    if (Direction == "N" || Direction == "S" || Direction == "E" || Direction == "W") {
        return "D";
    }
    else if (Direction === "U") {
        return "S";
    }
    else if (Direction === "D") {
        return "N";
    }
}

module.exports = { downTurn }