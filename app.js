const montoTotal = document.querySelector("#monto-total");
const porsentajeDefault = document.querySelector("#default-porsentaje");
const checkbox = document.querySelector("#opcion1");
const propinaElegida = document.querySelector("#otro-porsentaje");
const cantidadDePersonas = document.querySelector("#personas");
const calcular = document.querySelector("#calcular-total");
const totalPropina = document.querySelector("#total-de-propina");
const totalPropinaPorPersona = document.querySelector("#total-por-persona");
const reiniciar = document.querySelector("#reiniciar");

calcular.addEventListener("click", () => {

  calcularTotalPropina(montoTotal.value);
});

reiniciar.addEventListener("click", borrar);

function calcularTotalPropina(montoTotal) {
  let monto = 0;
  let propinaXPesona = 0;

  if (montoTotal === "") return alert("ingrese un monto valido");

  if (checkbox.checked) {
    const valorElegido = propinaElegida.value / 100;
    monto = valorElegido * montoTotal;
    propinaXPesona = monto / cantidadDePersonas.value;
  } else {
    const porsentajeDecimal = porsentajeDefault.value / 100;
    monto = porsentajeDecimal * montoTotal;
    propinaXPesona = monto / cantidadDePersonas.value;
  }

  totalPropina.value = monto;
  totalPropinaPorPersona.value = propinaXPesona;
}

function borrar() {
  montoTotal.value = "";
  propinaElegida.value = "";
  cantidadDePersonas.value = "";

  totalPropina.value = "";
  totalPropinaPorPersona.value = "";
}
