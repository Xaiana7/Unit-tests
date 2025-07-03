//const { checkStudent } = require("./list");
const fs = require('fs');

function readDataFromFile() {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка чтения файла:', err);
            return;
        }
        const parsedData = JSON.parse(data);

        return {
            stud: parsedData.students,
            grades: parsedData.grades        
        };
    });
}
class DeterminationError extends Error {
    constructor(message = "Determination error!") {
        super(message);
        this.name = "DeterminationError";
    }
}

class TypisationError extends Error {
    constructor(message = "X typisation error!") {
        super(message);
        this.name = "TypisationError";
    }
}

class ArraySizeError extends Error {
    constructor(message = "X size error!") {
        super(message);
        this.name = "ArraySizeError";
    }
}

class ValueError extends Error {
    constructor(message = "X value error!") {
        super(message);
        this.name = "ValueError";
    }
}//имена совпадают

class ArraySizeInconsistency extends Error {
    constructor(message = "Array size inconsistency!") {
        super(message);
        this.name = "ArraySizeInconsistency";
    }
}
const {st, gr} = readDataFromFile();

function checkStudent(students, grades) {
    if (typeof (students) === 'undefined' || typeof (grades) === 'undefined') {
        throw new DeterminationError('Determination error!');
    }
    //2
    if (!Array.isArray(students) || !Array.isArray(grades)) {
        throw new TypisationError("Typisation error!");
    }
    //3
    if (students.length < 1 || students.length > 100) {
        throw new ArraySizeError("Array S size error!");
    }
    if (grades.length !== students.length) {
        throw new ArraySizeInconsistency("Array size inconsistency!");
    }
    const attendanceSummary = students.map((student, index) => {
        const records = grades[index];
        if (typeof student === 'undefined' || typeof records === 'undefined') {
            throw new DeterminationError("Determination error!");
        }
        if (typeof student !== "string") {
            throw new TypisationError("Typisation error!");
        }
        if (student.length < 1 || student.length > 30) {
            throw new ValueError("S value error!");
        }
        const attended = records.filter(record => record === "1").length;
        const possible = records.filter(record => record === "1" || record === "0").length;
        const attendanceRate = possible > 0 ? (attended / possible) * 100 : 0;

        return {
            name: student,
            attendedClasses: possible,
            attendanceRate: parseFloat(attendanceRate.toFixed(2))
        };
    });

    const averageAttendance = attendanceSummary.reduce((sum, { attendanceRate }) => sum + attendanceRate, 0) / students.length;

    return attendanceSummary.filter(({ attendanceRate }) => attendanceRate <= averageAttendance)
        .map(({ name, attendedClasses, attendanceRate }) => `V = {${name}, ${attendedClasses}, ${attendanceRate}%}`);
}

function main() {
    // Задаем массивы данных напрямую в коде
    const students = ["Ivanov", "Sidorov", "Potnov", "Krasnov", "Smit"];
    const grades = [
        ["1", "0", "1", "1", "1"],
        ["0", "", "1", "", "0"],
        ["1", "1", "0", "1", "1"],
        ["1", "0", "1", "0", "0"],
        ["", "", "", "", ""]
    ];

    const result = checkStudent(st, gr);
    result.forEach(line => console.log(line));
}

module.exports = {
    checkStudent,
    TypisationError,
    ArraySizeError,
    ArraySizeInconsistency,
    DeterminationError,
    ValueError
};

main();