function mostrarIntereses() {
    const capital = document.getElementById("capital").value;
    if (capital) {
        const tasaInteres = 0.02;
        const intereses = capital * tasaInteres;
        const total = parseFloat(capital) + intereses;
        document.getElementById("resultadoIntereses").innerText = `El total después de un mes será: $${total.toFixed(2)}`;
    } else {
        document.getElementById("resultadoIntereses").innerText = "Por favor, ingresa un capital válido.";
    }
}

function calcularSueldo() {
    const sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    const venta1 = parseFloat(document.getElementById("venta1").value);
    const venta2 = parseFloat(document.getElementById("venta2").value);
    const venta3 = parseFloat(document.getElementById("venta3").value);

    if (sueldoBase && venta1 && venta2 && venta3) {
        const porcentajeComision = 0.10;
        const comisiones = (venta1 + venta2 + venta3) * porcentajeComision;
        const sueldoTotal = sueldoBase + comisiones;
        document.getElementById("resultadoSueldo").innerText = `Comisiones: $${comisiones.toFixed(2)}, Sueldo total: $${sueldoTotal.toFixed(2)}`;
    } else {
        document.getElementById("resultadoSueldo").innerText = "Por favor, ingresa valores válidos.";
    }
}

function calcularDescuento() {
    const totalCompra = parseFloat(document.getElementById("totalCompra").value);
    if (totalCompra) {
        const descuento = 0.15;
        const precioFinal = totalCompra * (1 - descuento);
        document.getElementById("resultadoDescuento").innerText = `El precio final es: $${precioFinal.toFixed(2)}`;
    } else {
        document.getElementById("resultadoDescuento").innerText = "Por favor, ingresa un total válido.";
    }
}

function calcularCalificacion() {
    const parcial1 = parseFloat(document.getElementById("parcial1").value);
    const parcial2 = parseFloat(document.getElementById("parcial2").value);
    const parcial3 = parseFloat(document.getElementById("parcial3").value);
    const examenFinal = parseFloat(document.getElementById("examenFinal").value);
    const trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

    if (parcial1 && parcial2 && parcial3 && examenFinal && trabajoFinal) {
        const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
        const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
        document.getElementById("resultadoCalificacion").innerText = `La calificación final es: ${calificacionFinal.toFixed(2)}`;
    } else {
        document.getElementById("resultadoCalificacion").innerText = "Por favor, ingresa todas las calificaciones.";
    }
}

function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    if (fechaNacimiento) {
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        document.getElementById("resultadoEdad").innerText = `La edad de la persona es: ${edad} años`;
    } else {
        document.getElementById("resultadoEdad").innerText = "Por favor, ingresa una fecha válida.";
    }
}

function palabrasANumeros() {
    const palabras = document.getElementById("palabras").value.split(',').map(p => p.trim().toLowerCase());
    const numeros = {
        "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4,
        "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };
    const resultado = palabras.map(p => numeros[p] !== undefined ? numeros[p] : -1);
    document.getElementById("resultadoPalabrasNumeros").innerText = `Resultado: [${resultado}]`;
}

function calcularPagoHorasExtras() {
    const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
    const pagoHora = parseFloat(document.getElementById("pagoHora").value);

    if (horasTrabajadas > 40) {
        const horasExtras = horasTrabajadas - 40;
        let pagoExtra = 0;

        if (horasExtras <= 8) {
            pagoExtra = horasExtras * pagoHora * 2;
        } else {
            pagoExtra = 8 * pagoHora * 2 + (horasExtras - 8) * pagoHora * 3;
        }

        const pagoTotal = 40 * pagoHora + pagoExtra;
        document.getElementById("resultadoHorasExtras").innerText = `Pago total con horas extras: $${pagoTotal.toFixed(2)}`;
    } else {
        const pagoTotal = horasTrabajadas * pagoHora;
        document.getElementById("resultadoHorasExtras").innerText = `Pago total: $${pagoTotal.toFixed(2)}`;
    }
}

function calcularUtilidad() {
    const salario = parseFloat(document.getElementById("salario").value);
    const antiguedad = parseFloat(document.getElementById("antiguedad").value);

    let porcentaje = 0;
    if (antiguedad < 1) {
        porcentaje = 0.05;
    } else if (antiguedad < 2) {
        porcentaje = 0.07;
    } else if (antiguedad < 5) {
        porcentaje = 0.10;
    } else if (antiguedad < 10) {
        porcentaje = 0.15;
    } else {
        porcentaje = 0.20;
    }

    const utilidad = salario * porcentaje;
    document.getElementById("resultadoUtilidad").innerText = `Utilidad: $${utilidad.toFixed(2)}`;
}

function calcularLetraDNI() {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dni = parseInt(document.getElementById("dni").value);

    if (!isNaN(dni) && dni >= 0) {
        const letra = letras[dni % 23];
        document.getElementById("resultadoLetraDNI").innerText = `La letra del DNI es: ${letra}`;
    } else {
        document.getElementById("resultadoLetraDNI").innerText = "Número de DNI inválido.";
    }
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const comentarios = document.getElementById("comentarios").value.trim();
    const password = document.getElementById("password").value.trim();
    const aceptoCondiciones = document.getElementById("aceptoCondiciones").checked;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    let valido = true;

    if (!nombre) {
        alert("El nombre es obligatorio.");
        valido = false;
    }
    if (!regexEmail.test(email)) {
        alert("El email no es válido.");
        valido = false;
    }
    if (comentarios.length > 50) {
        alert("Los comentarios no deben exceder los 50 caracteres.");
        valido = false;
    }
    if (!regexPassword.test(password)) {
        alert("La contraseña debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito.");
        valido = false;
    }
    if (!aceptoCondiciones) {
        alert("Debe aceptar las condiciones del servicio.");
        valido = false;
    }

    if (!valido) {
        document.getElementById("resultadoFormulario").innerText = "Por favor, corrige los errores y vuelve a enviar el formulario.";
    }

    return valido;
}

function eliminarEtiquetasPeligrosas() {
    let htmlInput = document.getElementById("htmlInput").value;
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    htmlInput = htmlInput.replace(regex, '');
    document.getElementById("resultadoHTML").innerText = `Resultado limpiado: ${htmlInput}`;
}
