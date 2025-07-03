const wordCheck = require('./wordChek');

describe('wordCheck', () => {
    test('Корректные данные, ожидаем 3', () => {
        expect(wordCheck("abc def ghi", 3, 3)).toBe(3);
    });
    test('Корректные данные, ожидаем 1', () => {
        expect(wordCheck("abcdefghij", 10, 10)).toBe(1);
    });
    test('Корректные данные, ожидаем 0', () => {
        expect(wordCheck("abcdefghij", 3, 3)).toBe(0);
    });
    test('Некорректные данные, некорректный символ в строке', () => {
        expect(wordCheck("  ", 1, 1)).toBe(0);
    });
    test('Некорректные данные, проверка типов, k не является числом', () => {
        expect(wordCheck("abc def ghi", 3, "2")).toBe(-1);         
    });
    test('Некорректные данные,  проверка типов, m не является числом', () => {
        expect(wordCheck("abc def ghi", "3", 2)).toBe(-1);
    });
    test('Некорректные данные,  проверка типов, input не является строкой', () => {
        expect(wordCheck(12345, 3, 2)).toBe(-1);
    });
    test('Некорректные данные, undefined', () => {
        expect(wordCheck(undefined, 1, 1)).toBe(-1);
    });
    test('Некорректные данные, переданы не все данные', () => {
        expect(wordCheck("abc def ghi", 3)).toBe(-1); 
    });
    test('Некорректные данные, неверный порядок передачи данных', () => {
        expect(wordCheck(12345, 2, "abc def ghi")).toBe(-1);
    });
    test('Некорректные данные, переданы не все данные', () => {
        expect(wordCheck(3, 2)).toBe(-1);
    });
    test('Некорректные данные, k > m', () => {
        expect(wordCheck("abc def ghi", 10, 11)).toBe(-1);
    });
    test('Некорректные данные, k < 1', () => {
        expect(wordCheck("abc def ghi", 10, 0)).toBe(-1);
    });
    test('Некорректные данные, m > 10', () => {
        expect(wordCheck("abc def ghi", 11, 5)).toBe(-1);
    });
    test('Некорректные данные, m < 0', () => {
        expect(wordCheck("abc def ghi", 0, 0)).toBe(-1);
    });
    test('Некорректные данные, пустая строка', () => {
        expect(wordCheck("", 1, 1)).toBe(-1);
    });
    test('Некорректные данные, русские символы', () => {
        expect(wordCheck("фыв", 3, 3)).toBe(-1);
    });
    test('Некорректные данные, некорректный символ в строке', () => {
        expect(wordCheck("abc def ghi.", 3, 3)).toBe(-1);
    });
    test('Некорректные данные, большая буква', () => {
        expect(wordCheck("Abc def ghi", 3, 3)).toBe(-1);
    });
})