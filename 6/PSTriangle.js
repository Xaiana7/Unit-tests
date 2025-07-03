function PSTriangle(a, b, c) {
  let perimeter = 0;
  let area = 0;

  if (
    a + b <= c ||
    a + c <= b ||
    b + c <= a ||
    a <= 0 ||
    a > 100 ||
    b > 100 ||
    c > 100 ||
    b <= 0 ||
    c <= 0
  ) {
    // Параметры не соответствуют треугольнику
    perimeter = 0;
    area = 0;
  } else {
    perimeter = a + b + c;
    const s = perimeter / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  return {
    perimeter: perimeter,
    area: area,
  };
}

module.exports = PSTriangle;
