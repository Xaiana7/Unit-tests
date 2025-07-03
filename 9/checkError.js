class DeterminationError extends Error {
    constructor(message = "Determination Error!") {
        super(message);
        this.name = "DeterminationError";
    }
}

class TypisationError extends Error {
    constructor(message = "Typisation Error!") {
        super(message);
        this.name = "TypisationError";
    }
}

class ArraySizeError extends Error {
    constructor(message = "Array X Error!") {
        super(message);
        this.name = "ArraySizeError";
    }
}

class ValueError extends Error {
    constructor(message = "Value error") {
        super(message);
        this.name = "ValueError";
    }
}

function checkError(G, K) {
    //1
    if (typeof (G) === 'undefined' || typeof (K) === 'undefined') {
        throw new DeterminationError('Determination error!');
    }
    //2
    if (!Array.isArray(G) || !Array.isArray(K)) {
        throw new TypisationError("Typisation error!");
    }
    //3
    if (K.length < 1 || K.length > 100) {
        throw new ArraySizeError("Array K size error!");
    }
    if (G.length !== K.length) {
        throw new ArraySizeError("Array G size error!");
    }

    let resArr = [];
    let sum = 0;

    for (let i = 0; i < K.length; i++) {
        if (typeof G[i] === 'undefined' || typeof K[i] === 'undefined') {
            throw new DeterminationError("Determination error!");
        }
        if (typeof G[i] !== "number" || typeof K[i] !== "number") {
            throw new TypisationError("Typisation error!");
        }
        if (K[i] % 1 !== 0) {
            throw new ValueError("Array K value error!");
        }
        if (K[i] < 1 || K[i] > 20) {
            throw new ValueError("Array K value error!");
        }
        if (G[i] < 0 || G[i] > K[i]) {
            throw new ValueError("Array G value error!");
        }
        resArr[i] = (G[i] / K[i]) * 100;
        sum += resArr[i];
    }
    const U = sum / K.length;
    return parseFloat(U.toFixed(2));
}
module.exports = checkError;

// try {
//     const G = [13, 10, 4, 2, 1];
//     const K = [20, 11, 5, 2, 1.1];
//     const U = checkError(G, K);
//     console.log(`Успешность освоения дисциплины: ${U}%`);
// } catch (error) {
//     console.error(`${error.name}: ${error.message}`);
// }
