const checkError = require('./checkError');

describe('checkError', () => {
    // ПОЗИТИВНЫЕ

    test('1 result is correct', () => {
        expect(checkError([13, 5, 4.9, 0, 2], [20, 11, 5, 8, 10])).toBe(45.69);
    });

    test('2 result is correct', () => {
        expect(checkError([4, 3.6, 4, 6, 4], [5, 5, 5, 8, 10])).toBe(69.4);
    });

    test('3 result is correct', () => {
        expect(checkError([13, 5, 4, 0.99, 2], [20, 11, 5, 1, 10])).toBe(61.89);
    });

    test('4 result is correct', () => {
        expect(checkError([13, 5.5, 4.9, 0.99, 2], [20, 11, 5, 1, 2])).toBe(82.4);
    });

    test('5 result is correct', () => {
        expect(checkError([13, 5.5, 4.9, 0, 2], [20, 11, 5, 1, 2])).toBe(62.60);
    });

    test('6 result is correct', () => {
        expect(checkError([13], [13])).toBe(100);
    });

    // НЕГАТИВНЫЕ

    test('6 throws error when there is 1 argument instead of 3', () => {
        expect(() => checkError([20, 11, 5, 1, 2])).toThrow('Determination error!');
    });

    test('7 throws error when G is undefined', () => {
        expect(() => checkError(undefined, [20, 11, 5, 1, 2])).toThrow('Determination error!');
    });

    test('8 throws error when K is undefined', () => {
        expect(() => checkError([13, 2, 5, 2, 2], undefined)).toThrow('Determination error!');
    });

    test('9 throws error when G is not an array (other type)', () => {
        expect(() => checkError(13, [20, 11, 5, 1, 2])).toThrow('Typisation error!');
    });

    test('10 throws error when K is not an array (other type)', () => {
        expect(() => checkError([13, 2, 5, 2, 2], 20)).toThrow('Typisation error!');
    });

    test('11 throws error when G is not an array (other type)', () => {
        expect(() => checkError([13, 2, 5, 2, 2], '123')).toThrow('Typisation error!');
    });

    test('12 throws error when G is not an array (other type)', () => {
        expect(() => checkError('[13, 2, 5, 2, 2]', [20, 11, 5, 1, 2])).toThrow('Typisation error!');
    });

    test('13 throws error when value K[i] is out of range', () => {
        expect(() => checkError([13, 10, 4, 2, 0], [20, 11, 5, 2, 0])).toThrow('Array K value error!');
    });

    test('14 throws error when value K[i] is out of range', () => {
        expect(() => checkError([13, 10, 4, 2, 1], [21, 11, 5, 2, 3])).toThrow('Array K value error!');
    });

    test('15 throws error when value K[i] is out of range', () => {
        expect(() => checkError([13, 10, 4, 2, 1], [19, 11, 5, 2.1, 3])).toThrow('Array K value error!');
    });

    test('16 throws error when value G[i] is out of range', () => {
        expect(() => checkError([20.99, 10, 4, 2, 1], [20, 11, 5, 2, 3])).toThrow('Array G value error!');
    });

    test('17 throws error when value G[i] is out of range', () => {
        expect(() => checkError([21, 10, 4, 2, 1], [20, 11, 5, 2, 3])).toThrow('Array G value error!');
    });

    test('18 throws error when value G[i] is out of range', () => {
        expect(() => checkError([19, 10, 4, 2, -0.01], [20, 11, 5, 2, 3])).toThrow('Array G value error!');
    });

    test('19 throws error when value G[i] is out of range', () => {
        expect(() => checkError([19, 10, 4, 2, 4], [20, 11, 5, 2, 3])).toThrow('Array G value error!');
    });

    test('20 throws error when G length is not correct', () => {
        expect(() => checkError([19, 10, 4, 2], [20, 11, 5, 2, 3])).toThrow('Array G size error!');
    });

    test('21 throws error when G length is not correct', () => {
        expect(() => checkError([19, 10, 4, 2], [])).toThrow('Array K size error!');
    });

});