/**
 * a^m · a^n
 */
export function multiplicarPotencias(base, m, n) {
    const esNumeroM = !isNaN(Number(m));
    const esNumeroN = !isNaN(Number(n));
    return [
        {
            descripcion: "Las bases son iguales",
            expresion: `${base}^${m} · ${base}^${n}`
        },
        {
            descripcion: "Se suman los exponentes",
            expresion: `${base}^(${m} + ${n})`
        },
        {
            descripcion: "Aplicamos la ley a^(m + n)",
            expresion: esNumeroM && esNumeroN
                ? `${base}^${Number(m) + Number(n)}`
                : `${base}^(${m} + ${n})`
        }
    ];
}
/**
 * a^m / a^n
 */
export function dividirPotencias(base, m, n) {
    const esNumeroM = !isNaN(Number(m));
    const esNumeroN = !isNaN(Number(n));
    return [
        {
            descripcion: "Las bases son iguales",
            expresion: `${base}^${m} / ${base}^${n}`
        },
        {
            descripcion: "Se restan los exponentes",
            expresion: `${base}^(${m} - ${n})`
        },
        {
            descripcion: "Aplicamos la ley a^(m − n)",
            expresion: esNumeroM && esNumeroN
                ? `${base}^${Number(m) - Number(n)}`
                : `${base}^(${m} - ${n})`
        }
    ];
}
/**
 * (a^m)^n
 */
export function potenciaDePotencia(base, m, n) {
    const esNumeroM = !isNaN(Number(m));
    const esNumeroN = !isNaN(Number(n));
    return [
        {
            descripcion: "Es una potencia de una potencia",
            expresion: `(${base}^${m})^${n}`
        },
        {
            descripcion: "Se multiplican los exponentes",
            expresion: `${base}^(${m}·${n})`
        },
        {
            descripcion: "Se multiplican los exponentes",
            expresion: esNumeroM && esNumeroN
                ? `${base}^${Number(m) * Number(n)}`
                : `${base}^(${m}·${n})`
        }
    ];
}
/**
 * a^(-n)
 */
export function exponenteNegativo(base, n) {
    return [
        {
            descripcion: "Identificamos un exponente negativo",
            expresion: `${base}^-${n}`
        },
        {
            descripcion: "El exponente pasa al denominador",
            expresion: `1 / ${base}^${n}`
        }
    ];
}
