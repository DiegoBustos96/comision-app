
function mostrarComision() {

    let comision = document.getElementById("comision").value;
    let monto = document.getElementById("monto").value;

    let montoDescuento = Math.round(monto * (100 - comision) / 100);
    let montoObjetivo = Math.round(monto * 100 / (100 - comision));

    document.getElementById("montoDescuento").value = montoDescuento;
    document.getElementById("montoObjetivo").value = montoObjetivo;

}