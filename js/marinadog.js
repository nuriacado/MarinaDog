/*FUNCION QUE PARA PONER EL HOME EN MODO NOCHE*/
function modoNoche() {
    let body = document.body;
    let boton = document.getElementById("botonNoche");

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
        menu.style.backgroundImage = "url('img/iconos/menuNegro.png')"
    } else {
        desplegable.className = "visible";
        menu.style.backgroundImage = "url('img/iconos/close.png')"
    }
}

/*VALIDACION DE FORMULARIO CONTACTO*/
function validarContacto() {
    flag = true;

    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");

    const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if ( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
        nombre.className = "invalido";
        nombre.placeholder = "Introduce un nombre";
        flag = false;
    } else {
        nombre.className = "";
        nombre.placeholder = "Nombre";
    }

    if ( mensaje.value == null || mensaje.value.length == 0 || /^\s+$/.test(mensaje.value) ) {
        mensaje.className = "invalido";
        mensaje.placeholder = "Introduce un mensaje";
        flag = false;
    } else {
        mensaje.className = "";
        mensaje.placeholder = "Mensaje";
    }

    if( !(/^\d{9}$/.test(telefono.value)) ) {
        telefono.className = "invalido";
        telefono.placeholder = "Telefono invalido";
        flag = false;
    } else {
        telefono.className = "";
        telefono.placeholder = "Teléfono";
    }

    if( !expresion.test(correo.value))  {
        correo.className = "invalido";
        correo.placeholder = "Correo invalido";
        flag = false;
    } else {
        correo.className = "";
        correo.placeholder = "Correo electrónico";
    }

    return flag;
}

/* VALIDACION REGISTRO */
function validarRegistro() {
    flag = true;

    let usuario = document.getElementById("usuario");
    let correo = document.getElementById("correo");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let telefono = document.getElementById("telefono");
    let contrasenia1 = document.getElementById("contrasenia1");
    let contrasenia2 = document.getElementById("contrasenia2");

    const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if ( usuario.value == null || usuario.value.length == 0 || /^\s+$/.test(usuario.value) ) {
        usuario.className = "invalido";
        usuario.placeholder = "Introduce un usuario";
        flag = false;
    } else {
        usuario.className = "";
        usuario.placeholder = "Usuario";
    }

    if ( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
        nombre.className = "invalido";
        nombre.placeholder = "Introduce un nombre";
        flag = false;
    } else {
        nombre.className = "";
        nombre.placeholder = "Nombre";
    }

    if ( apellidos.value == null || apellidos.value.length == 0 || /^\s+$/.test(apellidos.value) ) {
        apellidos.className = "invalido";
        apellidos.placeholder = "Introduce un apellido";
        flag = false;
    } else {
        apellidos.className = "";
        apellidos.placeholder = "Apellidos";
    }

    if( !(/^\d{9}$/.test(telefono.value)) ) {
        telefono.className = "invalido";
        telefono.placeholder = "Telefono invalido";
        flag = false;
    } else {
        telefono.className = "";
        telefono.placeholder = "Teléfono";
    }

    if( !expresion.test(correo.value))  {
        correo.className = "invalido";
        correo.placeholder = "Correo invalido";
        flag = false;
    } else {
        correo.className = "";
        correo.placeholder = "Correo electrónico";
    }

    if ( contrasenia1.value == null || contrasenia1.value.length == 0 || /^\s+$/.test(contrasenia1.value) ) {
        contrasenia1.className = "invalido";
        contrasenia1.placeholder = "Introduce una contraseña";
        flag = false;
    } else {
        contrasenia1.className = "";
        contrasenia1.placeholder = "Contraseña";
    }

    if ( contrasenia2.value != contrasenia1.value ) {
        contrasenia2.className = "invalido";
        contrasenia2.placeholder = "Las contraseñas no coinciden";
        flag = false;
    } else {
        contrasenia2.className = "";
        contrasenia2.placeholder = "Repite la contraseña";
    }

    return flag;
}

/* FUNCIÓN PARA VALIDAR EL INCIO DE SESIÓN */
function validarInicio() {
    flag = true;

    let usuario = document.getElementById("usuario");
    let contrasenia = document.getElementById("contrasenia");

    if ( usuario.value == null || usuario.value.length == 0 || /^\s+$/.test(usuario.value) ) {
        usuario.className = "invalido";
        usuario.placeholder = "Introduce un usuario";
        flag = false;
    } else {
        usuario.className = "";
        usuario.placeholder = "Usuario";
    }

    if ( contrasenia.value == null || contrasenia.value.length == 0 || /^\s+$/.test(contrasenia.value) ) {
        contrasenia.className = "invalido";
        contrasenia.placeholder = "Introduce una contraseña";
        flag = false;
    } else {
        contrasenia.className = "";
        contrasenia.placeholder = "Contraseña";
    }

    return flag;

}
/*
$(document).ready(function() {
    /* PARA QUE SE CIERRE EL MENU HAMBURGUESA CUANDO PULSAS FUERA 
    $(document).on("click",function(e) {
                    
        var container = $("#hamburguesa");
        var menu = $("#menu")
                           
           if (!container.is(e.target) && container.has(e.target).length === 0 &&!menu.is(e.target)) { 
                let menu = document.getElementById("menu");
                let desplegable = document.getElementById("hamburguesa");
                desplegable.className = "";
                menu.style.backgroundImage = "url('img/iconos/menuNegro.png')"
           }
    });
});
*/