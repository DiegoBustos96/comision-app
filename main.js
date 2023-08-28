
function mostrarComision() {

    let comision = document.getElementById("comision").value;
    let monto = document.getElementById("monto").value;

    let montoDescuento = Math.round(monto * (100 - comision) / 100);
    let montoObjetivo = Math.round(monto * 100 / (100 - comision));

    document.getElementById("montoDescuento").value = montoDescuento;
    document.getElementById("montoObjetivo").value = montoObjetivo;
    
    // NUEVO: Integración de nuevos inputs de Comisión (Descuentos/objetivo).
    let comisionObjetivo = Math.round(montoObjetivo - monto);
    let comisionDescuento = Math.round(monto - montoDescuento);

    document.getElementById("comisionObjetivo").value = comisionObjetivo;
    document.getElementById("comisionDescuento").value = comisionDescuento;

}

// FUNCIÓN FACTORIZADA PARA CAMBIO ENTRE ELEMENTOS POR MEDIO DE BOTÓN
const toggle = document.getElementById('toggle-btn');
const datos1 = document.getElementById('datos1');
const datos2 = document.getElementById('datos2');
const otros1 = document.getElementById('otros1');
const otros2 = document.getElementById('otros2');

function toggleElements(elementoMostrar, elementoOcultar, button) {
    elementoMostrar.classList.remove('hidden');
    elementoOcultar.classList.add('hidden');
    toggle.textContent = button;
}

toggle.addEventListener('click', () => {
    if (datos1.classList.contains('hidden')) {
        toggleElements(datos1, otros1, 'Mostrar Comisiones');
    } else {
        toggleElements(otros1, datos1, 'Mostrar Montos');
    }
});

toggle.addEventListener('click', () => {
    if (datos2.classList.contains('hidden')) {
        toggleElements(datos2, otros2, 'Mostrar Comisiones');
    } else {
        toggleElements(otros2, datos2, 'Mostrar Montos');
    }
});
