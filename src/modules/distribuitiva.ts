import { Paso } from "../models/paso.js";

function esNumero(valor: string): boolean {
  return !isNaN(Number(valor));
}

export function distributiva(
  a: string,
  b: number | string,
  c: number | string
): Paso[] {

  // 🔑 FORZAMOS b y c A NÚMERO
  const bNum = Number(b);
  const cNum = Number(c);

  const pasos: Paso[] = [];

  // Paso 1
  pasos.push({
    descripcion: "Expresión original",
    expresion: `${a}(${bNum} + ${cNum})`
  });

  // Paso 2
  pasos.push({
    descripcion: "Aplicamos la propiedad distributiva",
    expresion: `${bNum}${a} + ${cNum}${a}`
  });

  // ===== CASO NUMÉRICO =====
  if (esNumero(a)) {
    const aNum = Number(a);

    pasos.push({
      descripcion: "Realizamos las multiplicaciones",
      expresion: `${aNum * bNum} + ${aNum * cNum}`
    });

    pasos.push({
      descripcion: "Resultado final",
      expresion: `${aNum * bNum + aNum * cNum}`
    });

    return pasos;
  }

  // ===== CASO SIMBÓLICO =====
  pasos.push({
    descripcion: "Sumamos términos semejantes",
    expresion: `${bNum + cNum}${a}`   // ← AQUÍ YA ES SUMA REAL
  });

  return pasos;
}
