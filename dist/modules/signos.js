export function leyDeSignos(a, b) {
    const resultado = a * b;
    return [
        {
            descripcion: "Identificamos los signos de los números",
            expresion: `${a} × ${b}`
        },
        {
            descripcion: "Aplicamos la ley de signos",
            expresion: (a > 0 && b > 0) || (a < 0 && b < 0)
                ? "Signos iguales → resultado positivo"
                : "Signos diferentes → resultado negativo"
        },
        {
            descripcion: "Realizamos la multiplicación",
            expresion: `${resultado}`
        }
    ];
}
