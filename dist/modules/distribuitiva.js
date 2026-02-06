function esNumero(valor) {
    return !isNaN(Number(valor));
}
export function distributiva(a, b, c) {
    // 🔑 FORZAMOS b y c A NÚMERO
    const bNum = Number(b);
    const cNum = Number(c);
    const pasos = [];
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
        expresion: `${bNum + cNum}${a}` // ← AQUÍ YA ES SUMA REAL
    });
    return pasos;
}
