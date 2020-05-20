function Report () {

}

Report.prototype.returnColour = function (gradeString) {
    if (gradeString === "Green") {
        return "Green"
    } else if (gradeString === "Amber") {
        return "Amber"
    }
    return "Red"
}

Report.prototype.splitString = function (gradeString) {
    var gradeArray = gradeString.split(', ')
    console.log(gradeArray)
    return gradeArray
}


// var array = gradeString.split(', ')
// console.log(array)
