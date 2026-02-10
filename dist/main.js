// ===== EXPONENTES =====
import { multiplicarPotencias, dividirPotencias, potenciaDePotencia, exponenteNegativo } from "./modules/exponentes.js";
// ===== RESTO =====
import { leyDeSignos } from "./modules/signos.js";
import { distributiva } from "./modules/distribuitiva.js";
import { cramer2x2 } from "./modules/sistemas.js";
import { diferenciaDeCuadrados, diferenciaDeCubos, sumaDeCubos, trinomioCuadratico } from "./modules/factorizacion.js";
import { cramer3x3 } from "./modules/sistemas.js";
import { pendiente, distancia, rectaDosPuntos, rectaPuntoPendiente } from "./modules/rectas.js";
// ==========================
// DOM
// ==========================
const tema = document.getElementById("tema");
const inputsDiv = document.getElementById("inputs");
const resultadoDiv = document.getElementById("resultado");
const boton = document.getElementById("resolver");
tema.addEventListener("change", () => {
    limpiarTodo();
    mostrarInputs();
});
boton.addEventListener("click", resolver);
// ==========================
// INPUTS
// ==========================
function mostrarInputs() {
    inputsDiv.innerHTML = "";
    if (tema.value === "exp-multi" || tema.value === "exp-div" || tema.value === "exp-pot") {
        inputsDiv.innerHTML = `
      <label>Base</label><input id="base" class="form-control" placeholder="a">
      <label>m</label><input id="m" class="form-control" placeholder="m">
      <label>n</label><input id="n" class="form-control" placeholder="n">
    `;
    }
    if (tema.value === "cramer-3x3") {
        inputsDiv.innerHTML = `
        
        <h6>Ecuación 1</h6>
        <input id="a1" type="number" class="form-control mb-1" placeholder="a₁">
        <input id="b1" type="number" class="form-control mb-1" placeholder="b₁">
        <input id="c1" type="number" class="form-control mb-1" placeholder="c₁">
        <input id="d1" type="number" class="form-control mb-2" placeholder="d₁">

        <h6>Ecuación 2</h6>
        <input id="a2" type="number" class="form-control mb-1" placeholder="a₂">
        <input id="b2" type="number" class="form-control mb-1" placeholder="b₂">
        <input id="c2" type="number" class="form-control mb-1" placeholder="c₂">
        <input id="d2" type="number" class="form-control mb-2" placeholder="d₂">

        <h6>Ecuación 3</h6>
        <input id="a3" type="number" class="form-control mb-1" placeholder="a₃">
        <input id="b3" type="number" class="form-control mb-1" placeholder="b₃">
        <input id="c3" type="number" class="form-control mb-1" placeholder="c₃">
        <input id="d3" type="number" class="form-control mb-2" placeholder="d₃">
      `;
    }
    if (tema.value === "exp-neg") {
        inputsDiv.innerHTML = `
      <label>Base</label><input id="base" class="form-control" placeholder="a">
      <label>Exponente</label><input id="n" class="form-control" placeholder="n">
    `;
    }
    if (tema.value === "signos") {
        inputsDiv.innerHTML = `
      <label>a</label><input id="a" type="number" class="form-control">
      <label>b</label><input id="b" type="number" class="form-control">
    `;
    }
    if (tema.value === "distributiva") {
        inputsDiv.innerHTML = `
      <label>a</label><input id="a" class="form-control" placeholder="a">
      <label>b</label><input id="b" class="form-control" placeholder="b">
      <label>c</label><input id="c" class="form-control" placeholder="c">
    `;
    }
    if (tema.value === "cuadrados" || tema.value === "cubos-resta" || tema.value === "cubos-suma") {
        inputsDiv.innerHTML = `
      <label>a</label><input id="a" class="form-control" placeholder="a">
      <label>b</label><input id="b" class="form-control" placeholder="b">
    `;
    }
    if (tema.value === "trinomio") {
        inputsDiv.innerHTML = `
      <label>b</label><input id="b" type="number" class="form-control">
      <label>c</label><input id="c" type="number" class="form-control">
    `;
    }
    if (tema.value === "pendiente" || tema.value === "distancia" || tema.value === "recta-dos-puntos") {
        inputsDiv.innerHTML = `
      <label>x₁</label><input id="x1" type="number" class="form-control">
      <label>y₁</label><input id="y1" type="number" class="form-control">
      <label>x₂</label><input id="x2" type="number" class="form-control">
      <label>y₂</label><input id="y2" type="number" class="form-control">
    `;
    }
    if (tema.value === "recta-punto-pendiente") {
        inputsDiv.innerHTML = `
      <label>x₁</label><input id="x1" type="number" class="form-control">
      <label>y₁</label><input id="y1" type="number" class="form-control">
      <label>m</label><input id="m" type="number" class="form-control">
    `;
    }
    if (tema.value === "cramer-2x2") {
        inputsDiv.innerHTML = `
  <h6>Ecuación 1</h6>
    <label>a₁</label><input id="a1" type="number" class="form-control">
    <label>b₁</label><input id="b1" type="number" class="form-control">
    <label>c₁</label><input id="c1" type="number" class="form-control">
  <h6>Ecuación 2</h6>
    <label>a₂</label><input id="a2" type="number" class="form-control">
    <label>b₂</label><input id="b2" type="number" class="form-control">
    <label>c₂</label><input id="c2" type="number" class="form-control">
  `;
    }
}
// ==========================
// RESOLVER
// ==========================
function resolver() {
    limpiarTodo();
    let pasos = [];
    const num = (id) => Number(document.getElementById(id).value);
    const str = (id, d) => document.getElementById(id).value || d;
    switch (tema.value) {
        case "exp-multi":
            pasos = multiplicarPotencias(str("base", "a"), str("m", "m"), str("n", "n"));
            break;
        case "cramer-2x2":
            pasos = cramer2x2(num("a1"), num("b1"), num("c1"), num("a2"), num("b2"), num("c2"));
            break;
        case "cramer-3x3":
            pasos = cramer3x3(num("a1"), num("b1"), num("c1"), num("d1"), num("a2"), num("b2"), num("c2"), num("d2"), num("a3"), num("b3"), num("c3"), num("d3"));
            break;
        case "exp-div":
            pasos = dividirPotencias(str("base", "a"), str("m", "m"), str("n", "n"));
            break;
        case "exp-pot":
            pasos = potenciaDePotencia(str("base", "a"), str("m", "m"), str("n", "n"));
            break;
        case "exp-neg":
            pasos = exponenteNegativo(str("base", "a"), str("n", "n"));
            break;
        case "signos":
            pasos = leyDeSignos(num("a"), num("b"));
            break;
        case "distributiva":
            pasos = distributiva(str("a", "a"), str("b", "b"), str("c", "c"));
            break;
        case "cuadrados":
            pasos = diferenciaDeCuadrados(str("a", "a"), str("b", "b"));
            break;
        case "cubos-resta":
            pasos = diferenciaDeCubos(str("a", "a"), str("b", "b"));
            break;
        case "cubos-suma":
            pasos = sumaDeCubos(str("a", "a"), str("b", "b"));
            break;
        case "trinomio":
            pasos = trinomioCuadratico(num("b"), num("c"));
            break;
        case "pendiente": {
            const m = (num("y2") - num("y1")) / (num("x2") - num("x1"));
            pasos = pendiente(num("x1"), num("y1"), num("x2"), num("y2"));
            dibujarPendiente(m);
            break;
        }
        case "distancia": {
            const x1 = num("x1"), y1 = num("y1"), x2 = num("x2"), y2 = num("y2");
            pasos = distancia(x1, y1, x2, y2);
            dibujarDistancia(x1, y1, x2, y2);
            break;
        }
        case "recta-dos-puntos": {
            const x1 = num("x1"), y1 = num("y1"), x2 = num("x2"), y2 = num("y2");
            pasos = rectaDosPuntos(x1, y1, x2, y2);
            const m = (y2 - y1) / (x2 - x1);
            const b = y1 - m * x1;
            dibujarRecta(m, b);
            break;
        }
        case "recta-punto-pendiente": {
            const x1 = num("x1"), y1 = num("y1"), m = num("m");
            pasos = rectaPuntoPendiente(x1, y1, m);
            dibujarRecta(m, y1 - m * x1);
            break;
        }
    }
    mostrarPasos(pasos);
}
// ==========================
// RESULTADOS
// ==========================
function mostrarPasos(pasos) {
    pasos.forEach((p, i) => {
        resultadoDiv.innerHTML += `
      <div>
        <strong>Paso ${i + 1}:</strong> ${p.descripcion}<br>
      <pre>${p.expresion}</pre>
      </div><hr>`;
    });
}
// ==========================
// LIMPIAR
// ==========================
function limpiarTodo() {
    var _a;
    resultadoDiv.innerHTML = "";
    const c = document.getElementById("grafica");
    (_a = c === null || c === void 0 ? void 0 : c.getContext("2d")) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, c.width, c.height);
}
function dibujarPendiente(m) {
    const canvas = document.getElementById("grafica");
    if (!canvas)
        return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const escala = 20;
    const origenX = w / 2;
    const origenY = h / 2;
    // Ejes
    ctx.strokeStyle = "#aaa";
    ctx.beginPath();
    ctx.moveTo(0, origenY);
    ctx.lineTo(w, origenY);
    ctx.moveTo(origenX, 0);
    ctx.lineTo(origenX, h);
    ctx.stroke();
    // Recta y = mx
    ctx.strokeStyle = "#fd7e14";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = -origenX; x < origenX; x++) {
        const xReal = x / escala;
        const yReal = m * xReal;
        const px = origenX + x;
        const py = origenY - yReal * escala;
        if (x === -origenX)
            ctx.moveTo(px, py);
        else
            ctx.lineTo(px, py);
    }
    ctx.stroke();
    // Punto en el origen
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(origenX, origenY, 4, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarDistancia(x1, y1, x2, y2) {
    const canvas = document.getElementById("grafica");
    if (!canvas)
        return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const escala = 20;
    const origenX = w / 2;
    const origenY = h / 2;
    // Ejes
    ctx.strokeStyle = "#aaa";
    ctx.beginPath();
    ctx.moveTo(0, origenY);
    ctx.lineTo(w, origenY);
    ctx.moveTo(origenX, 0);
    ctx.lineTo(origenX, h);
    ctx.stroke();
    // Conversión
    const px1 = origenX + x1 * escala;
    const py1 = origenY - y1 * escala;
    const px2 = origenX + x2 * escala;
    const py2 = origenY - y2 * escala;
    // Segmento
    ctx.strokeStyle = "#198754";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px1, py1);
    ctx.lineTo(px2, py2);
    ctx.stroke();
    // Puntos
    ctx.fillStyle = "#dc3545";
    ctx.beginPath();
    ctx.arc(px1, py1, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px2, py2, 4, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarRecta(m, b) {
    const canvas = document.getElementById("grafica");
    if (!canvas)
        return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const escala = 20;
    const origenX = w / 2;
    const origenY = h / 2;
    // ===== EJES =====
    ctx.strokeStyle = "#aaa";
    ctx.beginPath();
    ctx.moveTo(0, origenY);
    ctx.lineTo(w, origenY);
    ctx.moveTo(origenX, 0);
    ctx.lineTo(origenX, h);
    ctx.stroke();
    // ===== RECTA y = mx + b =====
    ctx.strokeStyle = "#0d6efd";
    ctx.lineWidth = 2;
    ctx.beginPath();
    let primero = true;
    for (let px = 0; px <= w; px++) {
        const xReal = (px - origenX) / escala;
        const yReal = m * xReal + b;
        const py = origenY - yReal * escala;
        if (primero) {
            ctx.moveTo(px, py);
            primero = false;
        }
        else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();
}
