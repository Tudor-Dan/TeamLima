const display = require("../view/display");
const dataManager = require("../model/dataManager");

const getAllStudents = () => {
    const students = dataManager.readData("data.json");
    display.printData(students, "Students Table:");
}

const countClasses = () => {
    const students = dataManager.readData("data.json");
    let classes = students.map(s => s['class'])
    console.log([...new Set(classes)].length)
}

const getAllClasses = () => {
    const students = dataManager.readData("data.json");
    return new Set(students.map(s => s['class']))
}

const studentsByClass = () => {
    let ans = {}
    const students = dataManager.readData("data.json");
    let classes = getAllClasses()
    students.forEach(s => {
        if(ans[s.class] == undefined)
            ans[s.class] = 1
        else
            ans[s.class]++
    });
    console.log(ans)
}

const hasChosen = () => {
    const userOption = display.getInput("Please enter a number: ");
    if (userOption === "1") {
        getAllStudents();
    } else if (userOption === "2") {
        display.printMessage("'Add student' not implemented yet.", true);
    } else if (userOption === "3") {
        display.printMessage("'Update student' not implemented yet.", true);
    } else if (userOption === "4") {
        display.printMessage("'Delete student' not implemented yet.", true);
    } else if (userOption === "0") {
        return false;
    } else {
        display.printMessage("There is no such option.", true);
    }
    return true;
}

const handleSubmenu = () => {
    const optionsArray = ["Exit submenu", "List students", "Add a new student", "Update student", "Delete student"];
    display.printMenu("Student Classes Submenu", optionsArray);
}

const submenu = () => {
    let isRunning = true;
    while (isRunning) {
        handleSubmenu();
        try {
            isRunning = hasChosen();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

module.exports = {submenu};