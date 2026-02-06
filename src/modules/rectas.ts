import { Paso } from "../models/paso.js";

/**
 * Pendiente entre dos puntos
 */
export function pendiente(
  x1: number, y1: number,
  x2: number, y2: number
): Paso[] {

  if (x1 === x2) {
    return [{
      descripcion: "La recta es vertical, la pendiente no está definida",
      expresion: `x = ${x1}`
    }];
  }

  const m = (y2 - y1) / (x2 - x1);

  return [
    {
      descripcion: "Usamos la fórmula de la pendiente",
      expresion: `m = (y₂ − y₁) / (x₂ − x₁)`
    },
    {
      descripcion: "Sustituimos los valores",
      expresion: `m = (${y2} − ${y1}) / (${x2} − ${x1})`
    },
    {
      descripcion: "Sustituimos los valores",
      expresion: `m = (${y2 - y1}) / (${x2 - x1})`
    },    
    {
      descripcion: "Calculamos la pendiente",
      expresion: `m = ${m}`
    }
  ];
}

/**
 * Distancia entre dos puntos
 */
export function distancia(
  x1: number, y1: number,
  x2: number, y2: number
): Paso[] {

  const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return [
    {
      descripcion: "Usamos la fórmula de la distancia",
      expresion: `d = √((x₂ − x₁)² + (y₂ − y₁)²)`
    },
    {
      descripcion: "Sustituimos los valores",
      expresion: `d = √((${x2} − ${x1})² + (${y2} − ${y1})²)`
    },
    {
      descripcion: "Resultado",
      expresion: `d = ${d}`
    }
  ];
}

/**
 * Recta con DOS puntos
 * Forma punto–pendiente → forma y = mx + b
 */
export function rectaDosPuntos(
  x1: number, y1: number,
  x2: number, y2: number
): Paso[] {

  if (x1 === x2) {
    return [{
      descripcion: "La recta es vertical",
      expresion: `x = ${x1}`
    }];
  }

  const m = (y2 - y1) / (x2 - x1);
  const b = y1 - m * x1;

  return [
    {
      descripcion: "Calculamos la pendiente",
      expresion: `m = (${y2} − ${y1}) / (${x2} − ${x1}) = ${m}`
    },
    {
      descripcion: "Usamos la ecuación punto–pendiente",
      expresion: `y = m(x − x₁) + y₁`
    },
    {
      descripcion: "Sustituimos los valores",
      expresion: `y = ${m}(x − ${x1}) + ${y1}`
    },
    {
      descripcion: "Desarrollamos el paréntesis",
      expresion: `y = ${m}x − ${m * x1} + ${y1}`
    },
    {
      descripcion: "Simplificamos",
      expresion: `y = ${m}x + ${b}`
    }
  ];
}

/**
 * Recta con UN punto y la pendiente
 * Forma punto–pendiente → forma y = mx + b
 */
export function rectaPuntoPendiente(
  x1: number, y1: number, m: number
): Paso[] {

  const b = y1 - m * x1;

  return [
    {
      descripcion: "Usamos la ecuación punto–pendiente",
      expresion: `y = m(x − x₁) + y₁`
    },
    {
      descripcion: "Sustituimos los valores",
      expresion: `y = ${m}(x − ${x1}) + ${y1}`
    },
    {
      descripcion: "Desarrollamos el paréntesis",
      expresion: `y = ${m}x − ${m * x1} + ${y1}`
    },
    {
      descripcion: "Simplificamos",
      expresion: `y = ${m}x + ${b}`
    }
  ];
}
