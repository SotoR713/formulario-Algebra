/**
 * Sistema 2x2 por Ley de Cramer
 */
export function cramer2x2(a1, b1, c1, a2, b2, c2) {
    const pasos = [];
    pasos.push({
        descripcion: "Identificamos el sistema",
        expresion: `
${a1}x + ${b1}y = ${c1} 
${a2}x + ${b2}y = ${c2}
`.trim()
    });
    pasos.push({
        descripcion: "Identificamos la matriz de coeficientes",
        expresion: `
A = | ${a1}  ${b1} |
    | ${a2}  ${b2} |
`.trim()
    });
    const D = a1 * b2 - a2 * b1;
    const Dx = c1 * b2 - c2 * b1;
    const Dy = a1 * c2 - a2 * c1;
    pasos.push({
        descripcion: "Calculamos el determinante principal",
        expresion: `
    Det(A) = (${a1})(${b2}) − (${a2})(${b1}) = ${D}`
    });
    if (D === 0) {
        pasos.push({
            descripcion: "Conclusión",
            expresion: "El sistema no tiene solución única (D = 0)"
        });
        return pasos;
    }
    pasos.push({
        descripcion: "Calculamos Det(x)",
        expresion: `
    Ax = | ${c1}  ${b1} |
         | ${c2}  ${b2} |

    Detx = (${c1})(${b2}) − (${c2})(${b1}) = ${Dx}`
    });
    pasos.push({
        descripcion: "Calculamos Det(y)",
        expresion: `
       Ay = | ${a1}  ${c1} |
            | ${a2}  ${c2} |

    Dety = (${a1})(${c2}) − (${a2})(${c1}) = ${Dy}`
    });
    pasos.push({
        descripcion: "Calculamos las soluciones",
        expresion: `
    x = Detx / D = ${Dx / D}  
    y = Dety / D = ${Dy / D}`
    });
    pasos.push({
        descripcion: "(no es necesario, pero sustituimos para mostrar el resultado final)",
        expresion: `
    ${a1}(${Dx / D}) + ${b1}(${Dy / D}) = ${c1} 
    ${a2}(${Dx / D}) + ${b2}(${Dy / D}) = ${c2}
    `
    });
    return pasos;
}
/**
 * Sistema 3x3 por Ley de Cramer (desarrollado paso a paso)
 */
export function cramer3x3(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3) {
    const pasos = [];
    // =========================
    // Paso 1: Sistema
    // =========================
    pasos.push({
        descripcion: "Identificamos el sistema",
        expresion: `
${a1}x + ${b1}y + ${c1}z = ${d1}
${a2}x + ${b2}y + ${c2}z = ${d2}
${a3}x + ${b3}y + ${c3}z = ${d3}
`.trim()
    });
    // =========================
    // Paso 2: Matriz A
    // =========================
    pasos.push({
        descripcion: "Identificamos la matriz de coeficientes",
        expresion: `
A = | ${a1}  ${b1}  ${c1} |
    | ${a2}  ${b2}  ${c2} |
    | ${a3}  ${b3}  ${c3} |
`.trim()
    });
    // =========================
    // Paso 3: Expansión del determinante
    // =========================
    pasos.push({
        descripcion: "Expandimos el determinante por la primera fila",
        expresion: `
D = ${a1} · | ${b2}  ${c2} |
           | ${b3}  ${c3} |
  − ${b1} · | ${a2}  ${c2} |
           | ${a3}  ${c3} |
  + ${c1} · | ${a2}  ${b2} |
           | ${a3}  ${b3} |
`.trim()
    });
    // =========================
    // Paso 4: Menores
    // =========================
    const m1 = b2 * c3 - c2 * b3;
    const m2 = a2 * c3 - c2 * a3;
    const m3 = a2 * b3 - b2 * a3;
    pasos.push({
        descripcion: "Calculamos los determinantes menores",
        expresion: `
| ${b2}  ${c2} | = (${b2})(${c3}) − (${c2})(${b3}) = ${m1}
| ${a2}  ${c2} | = (${a2})(${c3}) − (${c2})(${a3}) = ${m2}
| ${a2}  ${b2} | = (${a2})(${b3}) − (${b2})(${a3}) = ${m3}
`.trim()
    });
    // =========================
    // Paso 5: Determinante principal
    // =========================
    const D = a1 * m1 - b1 * m2 + c1 * m3;
    pasos.push({
        descripcion: "Calculamos el determinante principal",
        expresion: `
D = ${a1}(${m1}) − ${b1}(${m2}) + ${c1}(${m3})
D = ${D}
`.trim()
    });
    if (D === 0) {
        pasos.push({
            descripcion: "Conclusión",
            expresion: "El sistema no tiene solución única (D = 0)"
        });
        return pasos;
    }
    // =========================
    // Dx
    // =========================
    const Dx = d1 * (b2 * c3 - c2 * b3) -
        b1 * (d2 * c3 - c2 * d3) +
        c1 * (d2 * b3 - b2 * d3);
    pasos.push({
        descripcion: "Calculamos Det(x)",
        expresion: `
Ax = | ${d1}  ${b1}  ${c1} |
     | ${d2}  ${b2}  ${c2} |
     | ${d3}  ${b3}  ${c3} |

Detx = ${Dx}
`.trim()
    });
    // =========================
    // Dy
    // =========================
    const Dy = a1 * (d2 * c3 - c2 * d3) -
        d1 * (a2 * c3 - c2 * a3) +
        c1 * (a2 * d3 - d2 * a3);
    pasos.push({
        descripcion: "Calculamos Det(y)",
        expresion: `
Ay = | ${a1}  ${d1}  ${c1} |
     | ${a2}  ${d2}  ${c2} |
     | ${a3}  ${d3}  ${c3} |

Dety = ${Dy}
`.trim()
    });
    // =========================
    // Dz
    // =========================
    const Dz = a1 * (b2 * d3 - d2 * b3) -
        b1 * (a2 * d3 - d2 * a3) +
        d1 * (a2 * b3 - b2 * a3);
    pasos.push({
        descripcion: "Calculamos Det(z)",
        expresion: `
Az = | ${a1}  ${b1}  ${d1} |
     | ${a2}  ${b2}  ${d2} |
     | ${a3}  ${b3}  ${d3} |

Detz = ${Dz}
`.trim()
    });
    // =========================
    // Paso final: soluciones
    // =========================
    pasos.push({
        descripcion: "Calculamos las soluciones",
        expresion: `
x = Detx / D = ${Dx} / ${D}
y = Dety / D = ${Dy} / ${D}
z = Detz / D = ${Dz} / ${D}
`.trim()
    });
    return pasos;
}
