class DeterminationError extends Error {
    constructor() {
        super('Determination error!')

    }
}
class TypisationError extends Error {
    constructor(name) {
        super(`${name} Typisation error!`)

    }
}
class ArraySizeError extends Error {
    constructor(name) {
        super(`${name} size error!`)

    }
}
class ValueError extends Error {
    constructor(name) {
        super(`${name} value error!`)
    }
}

class ArrayInconsistency extends Error {
    constructor() {
        super(`Array size inconsistency!`)
    }
}


function prac5(st, gr) {
    if (arguments.length != 2) {
        throw new DeterminationError();
    }
    if (st == undefined || gr == undefined) {
        throw new DeterminationError();
    }

    if (!Array.isArray(st)) {
        throw new TypisationError("Students");
    }
    if (!Array.isArray(gr)) {
        throw new TypisationError("Grades");
    }

    for (let i = 0; i < gr.length; ++i) {
        if (!Array.isArray(gr[i])) {
            throw new TypisationError("Grades");
        }
    }

    n = st.length;
    if (n > 100 || n < 1) {
        throw new ArraySizeError("Students");
    }

    if (n != gr.length) {
        throw new ArrayInconsistency();
    }

    for (let i = 0; i < n; ++i) {
        if (typeof st[i] !== 'string') {
            throw new TypisationError("Students");
        }
        if (st[i].length < 1 || st[i].length > 30) {
            throw new ArraySizeError("Students");
        }
        for (let j = i; j < st[i].length; ++j) {
            if (i != j && st[i] == st[j]) {
                throw new ValueError("Students");
            }
        }

    }
    let m = gr[0].length;
    for (let i = 0; i < n; ++i) {
        if (m != gr[i].length) {
            throw new ArraySizeError("Grades");
        }
        for (let j = 0; j < gr[i].length; ++j) {
            if (gr[i][j] !== '1' && gr[i][j] !== '0' && gr[i][j] !== '') {
                throw new ValueError("Grades");
            }
        }
    }


    let resArr = [];
    let Avg = 0;

    for (let i = 0; i < gr.length; ++i) {
        let p = 0;
        let t1 = 0, t2 = 0;
        for (let j = 0; j < m; ++j) {
            if (gr[i][j] == '1') { ++t1; }
            if (gr[i][j] == '0') { ++t2; }
        }

        p = t1 * 100 / (t1 + t2); //процент
        if (!isNaN(p)) {
            Avg += p;

            let obj = {
                name: st[i],
                Nk: t1 + t2,
                Pk: p
            };
            resArr.push(obj);
        }
    }
    Avg /= resArr.length;
    resArr = resArr.filter(item => item.Pk <= Avg);
    return { Avg, resArr };
}
module.exports = prac5;

const a = ["Alice", "Bob"];
const b = [
    ["0", "0", "0", "0"],
    ["", "", "", ""]
];

console.log(prac5(a, b))