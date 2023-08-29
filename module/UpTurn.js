function upTurn(Direction) {
    if (Direction == "N" || Direction == "S" || Direction == "E" || Direction == "W") {
        return "U";
    }
    else if (Direction === "U") {
        return "D";
    }
    else if (Direction === "D") {
        return "S";
    }
}

module.exports = { upTurn }