/*FUNCION QUE PARA PONER EL HOME EN MODO NOCHE*/
function modoNoche() {
    let body = document.body;
    let boton = document.getElementById("botonNoche");
    let menu = document.getElementById("menu");

    if (body.className == 'noche') {
        body.className = '';
        boton.style.backgroundImage = "url('img/iconos/luna.png')"
        
    } else {
        body.className = 'noche';
        boton.style.backgroundImage = "url('img/iconos/sol.png')"
    }
}

/*FUNCION PARA DESPLEGAR EL MENU HAMBURGUESA */
function menuHamburguesa() {
    let menu = document.getElementById("menu");
    let desplegable = document.getElementById("hamburguesa");

    if(desplegable.className == "visible") {
        desplegable.className = "";
        let color = document.body.className == 'noche' ? "url('img/iconos/menuBlanco.png')" : "url('img/iconos/menuNegro.png')"

        menu.style.backgroundImage = color;

    } else {
        desplegable.className = "visible";
        let color = document.body.className == 'noche' ? "url('img/iconos/closeBlanco.png')" : "url('img/iconos/closeNegro.png')"

        menu.style.backgroundImage = color
    }
}

/* FUNCIONES QUE VOY A UTILIZAR PARA VALIDAR LOS DIFERENTES FORMULARIOS */
function validarNombre(nombre) {
    if ( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
        nombre.className = "invalido";
        nombre.placeholder = "Introduce un nombre";
        return false;
    } else {
        nombre.className = "";
        nombre.placeholder = "Nombre";
        return true;
    }
}

function validarMensaje(mensaje) {
    if ( mensaje.value == null || mensaje.value.length == 0 || /^\s+$/.test(mensaje.value) ) {
        mensaje.className = "invalido";
        mensaje.placeholder = "Introduce un mensaje";
        return false;
    } else {
        mensaje.className = "";
        mensaje.placeholder = "Mensaje";
        return true;
    }
}

function validarTelefono(telefono) {
    if( !(/^\d{9}$/.test(telefono.value)) ) {
        telefono.className = "invalido";
        telefono.placeholder = "Telefono invalido";
        return false;
    } else {
        telefono.className = "";
        telefono.placeholder = "Teléfono";
        return true;
    }
}

function validarCorreo(correo) {
    const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if( !expresion.test(correo.value))  {
        correo.className = "invalido";
        correo.placeholder = "Correo invalido";
        return false;
    } else {
        correo.className = "";
        correo.placeholder = "Correo electrónico";
        return true;
    }
}

function validarUsuario(usuario) {
    if ( usuario.value == null || usuario.value.length == 0 || /^\s+$/.test(usuario.value) ) {
        usuario.className = "invalido";
        usuario.placeholder = "Introduce un usuario";
        return false;
    } else {
        usuario.className = "";
        usuario.placeholder = "Usuario";
        return true;
    }
}

function validarApellidos(apellidos) {
    if ( apellidos.value == null || apellidos.value.length == 0 || /^\s+$/.test(apellidos.value) ) {
        apellidos.className = "invalido";
        apellidos.placeholder = "Introduce un apellido";
        return false;
    } else {
        apellidos.className = "";
        apellidos.placeholder = "Apellidos";
        return true;
    }
}

function validarContrasenia1(contrasenia1) {
    if ( contrasenia1.value == null || contrasenia1.value.length == 0 || /^\s+$/.test(contrasenia1.value) ) {
        contrasenia1.className = "invalido";
        contrasenia1.placeholder = "Introduce una contraseña";
        return false;
    } else {
        contrasenia1.className = "";
        contrasenia1.placeholder = "Contraseña";
        return true;
    }
}

function validarContrasenia2(contrasenia2) {
    if ( contrasenia2.value != contrasenia1.value ) {
        contrasenia2.className = "invalido";
        contrasenia2.placeholder = "Las contraseñas no coinciden";
        return false;
    } else {
        contrasenia2.className = "";
        contrasenia2.placeholder = "Repite la contraseña";
        return true;
    }
}


/*VALIDACION DE FORMULARIO CONTACTO*/
function validarContacto() {
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");

    validarNombre(nombre)
    validarMensaje(mensaje)
    validarTelefono(telefono) 
    validarCorreo(correo)

    return (validarNombre(nombre) && validarMensaje(mensaje) && validarTelefono(telefono) && validarCorreo(correo));
}


/* VALIDACION REGISTRO */
function validarRegistro() {
    let usuario = document.getElementById("usuario");
    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let telefono = document.getElementById("telefono");
    let contrasenia1 = document.getElementById("contrasenia1");
    let contrasenia2 = document.getElementById("contrasenia2");

    validarNombre(nombre) 
    validarTelefono(telefono) 
    validarCorreo(correo)
    validarApellidos(apellidos)
    validarUsuario(usuario)
    validarContrasenia1(contrasenia1) 
    validarContrasenia2(contrasenia2)

    return (validarNombre(nombre) &&  validarTelefono(telefono) &&  validarCorreo(correo) && validarApellidos(apellidos) && validarUsuario(usuario) && validarContrasenia1(contrasenia1) && validarContrasenia2(contrasenia2));
}

/* FUNCIÓN PARA VALIDAR EL INCIO DE SESIÓN */
function validarInicio() {
    flag = true;

    let usuario = document.getElementById("usuario");
    let contrasenia = document.getElementById("contrasenia");

    validarUsuario(usuario)
    validarContrasenia1(contrasenia)

    if (validarUsuario(usuario) && validarContrasenia1(contrasenia)) {

        return true;
    }

    return false;
}

$(document).ready(function() {
    /* PARA QUE SE CIERRE EL MENU HAMBURGUESA CUANDO PULSAS FUERA */
    $(document).on("click",function(e) {
        let desplegable = document.getElementById("hamburguesa");
        var container = $("#hamburguesa");
        var menu = $("#menu")
                           
           if (!container.is(e.target) && container.has(e.target).length === 0 &&!menu.is(e.target) && desplegable!=null) { 
                let menu = document.getElementById("menu");
                desplegable.className = "";
                let color = document.body.className == 'noche' ? "url('img/iconos/menuBlanco.png')" : "url('img/iconos/menuNegro.png')"
                menu.style.backgroundImage = color;
           }
    });
});