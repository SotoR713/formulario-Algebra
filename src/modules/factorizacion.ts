import { Paso } from "../models/paso.js";

function esNumero(valor: string): boolean {
  return !isNaN(Number(valor));
}

/**
 * a² - b²
 */
export function diferenciaDeCuadrados(
  a: string,
  b: string
): Paso[] {
  const aNum = esNumero(a);
  const bNum = esNumero(b);

  const pasos: Paso[] = [];

  pasos.push({
    descripcion: "Identificamos una diferencia de cuadrados",
    expresion: `${a}² - ${b}²`
  });

  pasos.push({
    descripcion: "Aplicamos la fórmula: a² - b² = (a + b)(a - b)",
    expresion: `(${a} + ${b})(${a} - ${b})`
  });

  if (aNum && bNum) {
    pasos.push({
      descripcion: "Resultado final",
      expresion: `(${Number(a) + Number(b)})(${Number(a) - Number(b)})`
    });
  }

  return pasos;
}

/**
 * a³ - b³
 */
export function diferenciaDeCubos(
  a: string,
  b: string
): Paso[] {
  const aNum = esNumero(a);
  const bNum = esNumero(b);

  const pasos: Paso[] = [];

  pasos.push({
    descripcion: "Identificamos una diferencia de cubos",
    expresion: `${a}³ - ${b}³`
  });

  pasos.push({
    descripcion: "Aplicamos la fórmula: a³ - b³ = (a - b)(a² + ab + b²)",
    expresion: `(${a} - ${b})(${a}² + ${a}·${b} + ${b}²)`
  });

  if (aNum && bNum) {
    pasos.push({
      descripcion: "Resultado final",
      expresion: `(${Number(a) - Number(b)})(${Number(a) ** 2 + Number(a) * Number(b) + Number(b) ** 2})`
    });
  }

  return pasos;
}

/**
 * a³ + b³
 */
export function sumaDeCubos(
  a: string,
  b: string
): Paso[] {
  const aNum = esNumero(a);
  const bNum = esNumero(b);

  const pasos: Paso[] = [];

  pasos.push({
    descripcion: "Identificamos una suma de cubos",
    expresion: `${a}³ + ${b}³`
  });

  pasos.push({
    descripcion: "Aplicamos la fórmula: a³ + b³ = (a + b)(a² - ab + b²)",
    expresion: `(${a} + ${b})(${a}² - ${a}·${b} + ${b}²)`
  });

  if (aNum && bNum) {
    pasos.push({
      descripcion: "Resultado final",
      expresion: `(${Number(a) + Number(b)})(${Number(a) ** 2 - Number(a) * Number(b) + Number(b) ** 2})`
    });
  }

  return pasos;
}

/**
 * Trinomio x² + bx + c (SE QUEDA NUMÉRICO)
 */
export function trinomioCuadratico(
  b: number,
  c: number
): Paso[] {
  const pasos: Paso[] = [];

  pasos.push({
    descripcion: "Identificamos la forma del trinomio x² + bx + c",
    expresion: `x² + ${b}x + ${c}`
  });

  let m = 0;
  let n = 0;
  let encontrado = false;

  for (let i = -Math.abs(c); i <= Math.abs(c); i++) {
    if (i !== 0 && c % i === 0) {
      const j = c / i;
      if (i + j === b) {
        m = i;
        n = j;
        encontrado = true;
        break;
      }
    }
  }

  if (!encontrado) {
    pasos.push({
      descripcion: "No se encontraron dos números que cumplan la condición",
      expresion: "El trinomio no es factorizable con números enteros"
    });
    return pasos;
  }

  pasos.push({
    descripcion: "Buscamos dos números que sumen b y multipliquen c",
    expresion: `(m + n = ${b})  y  (m · n = ${c})`
  });

    pasos.push({
    descripcion: "Buscamos dos números que sumen b y multipliquen c",
    expresion: `m=${m}  y  n=${n}`
  });
    pasos.push({
    descripcion: "Verificamos que los números encontrados sean correctos",
    expresion: `(${m} + ${n} = ${b})  y  (${m} · ${n} = ${c})`
  });

  pasos.push({
    descripcion: "Escribimos la factorización",
    expresion: `(x + ${m})(x + ${n})`
  });

  return pasos;
}
