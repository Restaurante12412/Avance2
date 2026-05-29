console.log("LOGIN CARGADO");

import { supabase }
    from './supabase.js';
const form =
    document.querySelector(".CajaPrincipal");
form.addEventListener("submit",
    async (e) => {
        e.preventDefault();
        const usuario =
            document
                .getElementById("usuario")
                .value
                .trim();
        const password =
            document
                .getElementById("txtclave")
                .value
                .trim();
        const { data, error } =
            await supabase
                .from("usuario")
                .select("*")
                .eq("dni", usuario)
                .single();
        // SI NO EXISTE
        if (error || !data) {
            alert("Usuario no encontrado");
            return;
        }
        // VALIDAR PASSWORD
        if (password !== data.password) {
            alert("Contraseña incorrecta");
            return;
        }
        // LOGIN OK
        redireccionar(data.id_rol);
    });


function redireccionar(rol) {
    switch (rol) {
        case 1:
            window.location.href =
                "./paneles/jefe/p.jefe.html";
            break;
        case 2:
            window.location.href =
                "./paneles/mesero/p.mesero.html";
            break;
        case 3:
            window.location.href =
                "./paneles/cocina/p.cocina.html";
            break;
        default:
            alert("Rol inválido");
    }
}