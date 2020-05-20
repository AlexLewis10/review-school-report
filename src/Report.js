function Report () {

}

Report.prototype.returnColour = function (gradeString) {
    if (gradeString === "Green") {
        return "Green"
    }
    return "Amber"
}