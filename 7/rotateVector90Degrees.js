function rotateVector90Degrees(xa, ya, xb, yb) {
  const epsilon = 0.0001;
  const min = -1000;
  const max = 1000;
  // Проверка на условие
  if (
    xa < min ||
    xb < min ||
    ya < min ||
    yb < min ||
    xa > max ||
    xb > max ||
    ya > max ||
    yb > max
  ) {
    return [0, 0, 0, 0];
  }
  if (isNaN(xa) || isNaN(ya) || isNaN(xb) || isNaN(yb)) {
    return [0, 0, 0, 0];
  }
  // Проверка на нулевые векторы
  if (
    (Math.abs(xa) < epsilon && Math.abs(ya) < epsilon) ||
    (Math.abs(xb) < epsilon && Math.abs(yb) < epsilon)
  ) {
    return [0, 0, 0, 0];
  }
  // Найти какой угол изначально
  function validateAngleBetween(x1, y1, x2, y2) {
    const dotAB = x1 * x2 + y1 * y2;
    const lenghtA = Math.sqrt(x1 * x1 + y1 * y1);
    const lenghtB = Math.sqrt(x2 * x2 + y2 * y2);
    const cosAng = dotAB / (lenghtA * lenghtB);
    return Math.acos(cosAng);
  }
  function rotateVector(x, y, angle) {
    const xNew = x * Math.cos(angle) - y * Math.sin(angle);
    const yNew = x * Math.sin(angle) + y * Math.cos(angle);
    return [xNew, yNew];
  }
  const direction = xa * yb - xb * ya; //проверяем расстановку точек (потом решать будем куда схлопывать угол)
  const startAngle = validateAngleBetween(xa, ya, xb, yb);
  const angleForRotate = (Math.PI / 2 - startAngle) / 2;
  if (direction < 0) {
    const [newXa, newYa] = rotateVector(xa, ya, angleForRotate);
    const [newXb, newYb] = rotateVector(xb, yb, -angleForRotate);
    return [newXa, newYa, newXb, newYb];
  } else {
    const [newXa, newYa] = rotateVector(xa, ya, -angleForRotate);
    const [newXb, newYb] = rotateVector(xb, yb, +angleForRotate);
    return [newXa, newYa, newXb, newYb];
  }
}
module.exports = { rotateVector90Degrees };

const xa = 1,
  ya = 0;
const xb = -1,
  yb = 0;
const [xaRot, yaRot, xbRot, ybRot] = rotateVector90Degrees(xa, ya, xb, yb);
console.log(`New coordinates of A: (${xaRot}, ${yaRot})`);
console.log(`New coordinates of B: (${xbRot}, ${ybRot})`);
