const PSTriangle = require('./PSTriangle'); // Путь к файлу с функцией

describe('PSTriangle', () => {
    test('Треугольник со сторонами 3, 4, 5 должен иметь периметр 12 и площадь 6', () => {
        const a = 3;
        const b = 4;
        const c = 5;
        const result = PSTriangle(a, b, c);

        expect(result.perimeter).toBe(12);
        expect(result.area).toBeCloseTo(6);
    });

    test('Треугольник с позитивными граничными значениями 100, 100, 100 должен иметь периметр 300 и площадь 4330,127', () => {
        const a = 100;
        const b = 100;
        const c = 100;
        const result = PSTriangle(a, b, c);

        expect(result.perimeter).toBe(300);
        expect(result.area).toBeCloseTo(4330.127, 3); // Площадь может быть округлена
    });

    test('Треугольник со соторонами 1,2,3 не может существовать и оба значения будут равны нулю', () => {
        const result = PSTriangle(1, 2, 3);

        expect(result.perimeter).toBe(0);
        expect(result.area).toBe(0);
    });

    test('Треугольник со соторонами 1,0,2 не может существовать и оба значения будут равны нулю', () => {
        const result = PSTriangle(1, 0, 2);

        expect(result.perimeter).toBe(0);
        expect(result.area).toBe(0);
    });



    test('Треугольник с одной стороной превышающей 100, результат равен нулю', () => {
        const a = 101;
        const b = 5;
        const c = 8;
        const result = PSTriangle(a, b, c);

        expect(result.perimeter).toBe(0);
        expect(result.area).toBe(0); // Площадь может быть округлена
    });
});