const montoTotal = document.querySelector("#monto-total");
const porsentajeDefault = document.querySelector("#default-porsentaje");
const checkbox = document.querySelector("#opcion1");
const propinaElegida = document.querySelector("#otro-porsentaje");
const cantidadDePersonas = document.querySelector("#personas");
const calcular = document.querySelector("#calcular-total");
const totalPropina = document.querySelector("#total-de-propina");
const totalPropinaPorPersona = document.querySelector("#total-por-persona");
const reiniciar = document.querySelector("#reiniciar");

document.addEventListener("DOMContentLoaded", () => {
  calcular.addEventListener("click", () => {
    calcularTotalPropina();
  });

  reiniciar.addEventListener("click", borrar);
});
function calcularTotalPropina() {
  let monto = 0;
  let propinaXPesona = 0;
  const montoTotalValor = parseFloat(montoTotal.value);
  const cantidadDePerssonasValor = parseFloat(cantidadDePersonas.value);

  if (isNaN(montoTotalValor) || montoTotalValor <= 0) {
    alert("ingrese un monto valido");
    return;
  }

  if (checkbox.checked) {
    const valorElegido = parseFloat(propinaElegida.value) / 100;
    monto = valorElegido * montoTotalValor;
  } else {
    const porsentajeDecimal = parseFloat(porsentajeDefault.value) / 100;
    monto = porsentajeDecimal * montoTotalValor;
  }
  if (cantidadDePerssonasValor > 0) {
    propinaXPesona = monto / cantidadDePerssonasValor;
  }
  totalPropina.value = monto.toFixed(2);
  totalPropinaPorPersona.value = propinaXPesona.toFixed(2);
}

function borrar() {
  montoTotal.value = "";
  propinaElegida.value = "";
  cantidadDePersonas.value = "";

  totalPropina.value = "";
  totalPropinaPorPersona.value = "";
}
