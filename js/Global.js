
//Funcion DE NAVEGACION
function irPanel(panel) {

    switch (panel) {
        //General
        case 'salir':
            window.location.href = '/index.html';
            break;
        //Jefe
        case 'gestion-empleados':
            window.location.href = './m.gestionEmpleados.html';
            break;
        case 'ventas':
            window.location.href = './m.reporteVentas.html';
            break;
        case 'gestion-menu':
            window.location.href = './m.gestionMenu.html';
            break;
        //Mesero
        case 'menu':
            window.location.href = '././m.menu.html';
            break;
        case 'crear-pedido':
            window.location.href = '././m.crearPedido.html';
            break;
        case 'cobro':
            window.location.href = '././m.cobro.html';
            break;
        //cocina
        case 'ver-pedidos':
            window.location.href = '././m.verPedidos.html';
            break;
        //default
        default:
            console.error('Panel no reconocido: ' + panel);
    }
}

//BOTON ABRE MENU LATERAL
function toggleMenu() {

    document
        .querySelector(".Popciones")
        .classList.toggle("activo");
    document
        .querySelector(".plateral")
        .classList.toggle("activo");

}