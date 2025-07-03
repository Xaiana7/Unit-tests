const {
    checkStudent,
    TypisationError,
    ArraySizeError,
    ArraySizeInconsistency,
    DeterminationError,
    ValueError
} = require('./check');

const fs = require('fs').promises;

async function readDataFromFile() {
    const data = await fs.readFile('data.json', 'utf8');
    return JSON.parse(data);
}

async function main() {
    const { st, gr } = await readDataFromFile();
    return {
        students: st, grades: gr
    }
}


describe('checkStudents', () => {
    // ПОЗИТИВНЫЕ

    test('1 result is correct', () => {
        expect(checkStudent(st, gr)).toBe([
            ['Sidorov', 3, 33.33],
            ['Krasnov', 5, 40],
            ['Smit', 0, 0]])
    });

    // test('2 result is correct', () => {
    //     expect(checkStudents([4, 3.6, 4, 6, 4], [5, 5, 5, 8, 10])).toBe(69.4);
    // });

    // test('3 result is correct', () => {
    //     expect(checkStudents([13, 5, 4, 0.99, 2], [20, 11, 5, 1, 10])).toBe(61.89);
    // });

    // test('4 result is correct', () => {
    //     expect(checkStudents([13, 5.5, 4.9, 0.99, 2], [20, 11, 5, 1, 2])).toBe(82.4);
    // });

    // test('5 result is correct', () => {
    //     expect(checkStudents([13, 5.5, 4.9, 0, 2], [20, 11, 5, 1, 2])).toBe(62.60);
    // });

    // test('6 result is correct', () => {
    //     expect(checkStudents([13], [13])).toBe(100);
    // });
});