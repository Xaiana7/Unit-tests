const { rotateVector90Degrees } = require('./rotateVector90Degrees');

describe('rotateVector90Degrees', () => {
    const epsilon = 0.0001;

    // Test for valid vector rotation
    test('Вектора (1,0) и (0,1) уже составляют прямой угол, ожидаем те же координаты', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 0, 0, 1);
        expect([xa, ya, xb, yb]).toEqual([1, 0, 0, 1]);
    });
    // Test for orthogonal vectors
    test('Вектора (1,0) и (0,1) уже составляют прямой угол, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 0, 0, 1);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    // Edge case for minimum values
    test('Вектор с негативными граничными условиями (нижняя граница), ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(-1001, -1001, -1001, -1001);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });

    // Edge case for maximum values
    test('Вектор с негативными граничными условиями (верхняя граница), ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1001, 1000, 1001, 1000);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });

    // Test for zero vectors
    test('Нулевые векторы, ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(0, 0, 0, 0);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });

    // Test for one zero vector
    test('Один вектор нулевой, ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(0, 0, 1, 1);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });

    // Test for negative coordinates
    test('Тест с отрицательными координатами, ожидаем верный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(-1, -2, -3, -4);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    // Test for mixed positive and negative coordinates
    test('Тест с отрицательными и положительными координатами, ожидаем верный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, -2, -3, 4);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    // Test for small vectors
    test('Маленькие значения у вектора, ожидаем верный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(0.001, 0.002, 0.003, 0.004);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    // Test for large vectors
    test('Включаем положительные граничные значения, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(999, 1000, 1000, 999);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Вектор (1, 2) и (3, 4) должен вернуть корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 2, 3, 4);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);

    });

    test('Вектор (3, 4) и (1, 2) (обратное напрвление) должен вернуть корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(3, 4, 1, 2);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    // Test for vectors that are already at 90 degrees
    test('Вектор уже составляет прямой угол, ожидаем те же координаты', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 1, -1, 1);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Вектора с отрицательным значением, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(-1, -2, -3, -4);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Вектора с большим значением, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(100, 200, 300, 400);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Вектора с дробным значением, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(0.1, 0.2, 0.3, 0.4);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Вектора с отрицательным дробным значением, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(-0.1, -0.2, -0.3, -0.4);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('У одного вектора недопустимо большое значение, ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1000, 1001, 1000, 1000);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });

    test('У одного вектора недопустимо маленькое значение, ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(-1001, -1000, -1000, -1000);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });

    test('Большие и маленькие допустимые граничные значения, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1000, -1000, -1000, 1000);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Один вектор положительный, другой отрицательный, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 1, -1, -1);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Изначальный угол 180 градусов, ожидаем корректный угол', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 0,-1, 0);
        const expectedAngle = Math.PI / 2;
        const angle = Math.acos((xa * xb + ya * yb) / (Math.sqrt(xa * xa + ya * ya) * Math.sqrt(xb * xb + yb * yb)));
        expect(angle).toBeCloseTo(expectedAngle, epsilon);
    });

    test('Переданы не все данные, ожидаем нули', () => {
        const [xa, ya, xb, yb] = rotateVector90Degrees(1, 1);
        expect([xa, ya, xb, yb]).toEqual([0, 0, 0, 0]);
    });
});
