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

function checkStudent(S, G) {
    //1
    if (typeof (S) === 'undefined' || typeof (G) === 'undefined') {
        throw new DeterminationError('Determination error!');
    }
    //2
    if (!Array.isArray(S) || !Array.isArray(G)) {
        throw new TypisationError("Typisation error!");
    }
    //3
    if (S.length < 1 || S.length > 100) {
        throw new ArraySizeError("Array S size error!");
    }
    if (G.length !== S.length) {
        throw new ArraySizeInconsistency("Array size inconsistency!");
    }

    let resArr = [];

    let totalProcent = 0;
    let totalLessons = 0;
    const V = [];
    let attendedLessons = 0;
    let totalStudentLessons = 0;
    let k = 0;
    for (let i = 0; i < S.length; i++) {
        if (G[i].length < 1 || G[i].length > 100) {
            throw new ArraySizeError("Array G size error!");
        }
        if (typeof S[i] === 'undefined') {
            throw new DeterminationError("Determination error!");
        }
        if (typeof S[i] !== "string") {
            //|| !/^[a-z A-Z]+$/.test(S[i])
            throw new TypisationError("Typisation error!");
        }
        if (S[i].length < 1 || S[i].length > 30) {
            throw new ValueError("S value error!");
        }
        for (let j = 0; j < G[i].length; j++) {
            
            if (typeof G[i][j] === 'undefined' || typeof G[i][j] !== "string") {
                throw new DeterminationError("Determination error!");
            }
            if (G[i][j] === '1') {
                attendedLessons++;
                totalStudentLessons++;
                totalLessons++;
            }
            else
                if
                    (G[i][j] === '0') {
                    totalStudentLessons++;
                    totalLessons++;
                }
                else
                    if
                        (G[i][j] === '') {
                        totalLessons++;
                    }
        }
        resArr[i][0] = S[i];
        console.log(1);
        resArr[i][1] = attendedLessons; //посещения
        console.log(2);
        resArr[i][2] = totalStudentLessons;  //всего занятий считаем в процент
        console.log(3);
        resArr[i][3] = totalStudentLessons / attendedLessons * 100; //процент посещаемости студента
        console.log(4);
        resArr[i][4] = totalLessons; //всего занятий
        console.log(5);
        totalProcent = totalProcent + resArr[i][3];
        console.log(resArr[i][1]);
        const pAvg = totalProcent / G[0].length; //средний процент посещаемости
        for (let i = 0; i < S.length; i++) {
            let k = 0;
            if (resArr[i][3] <= pAvg) { //if percent <= mid
                V[k][0] = resArr[i][0]; //student's name
                V[k][1] = resArr[i][2]; //сколько всего надо было посетить
                V[k][2] = resArr[i][3]; //процент посещаемости
            }
        }
        return {
            pAvg, V
        };
    }
}
// module.exports = {
// checkStudent,
// TypisationError,
// ArraySizeError,
// ArraySizeInconsistency,
// DeterminationError,
// ValueError
// };


try {
    const S = ["asd", "ewq", "gfd", "fhjskdlfg"];
    const G = [["1", "0", "", "1", "1"], ["0", "", "1", "", "0"], ["1", "1", "0", "1", "1"], ["1", "1", "1", "1", "0"]];
    const { pOut, gOut } = checkStudent(S, G);
    console.log(`Успешность освоения дисциплины: ${pOut, gOut}%`);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
