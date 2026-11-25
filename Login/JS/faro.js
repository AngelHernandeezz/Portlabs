const campoPassword = document.getElementById("contraseña");
const botonFaro = document.getElementById("botonFaro");

/**
 * Alterna la visibilidad de la contraseña y actualiza el estado del faro.
 * La función modifica elementos de la página y no devuelve ningún valor.
 */
function alternarVisibilidad() {
    const estabaVisible = campoPassword.type === "text";

    campoPassword.type = estabaVisible ? "password" : "text";
    botonFaro.setAttribute("aria-pressed", String(!estabaVisible));
}

botonFaro.addEventListener("click", alternarVisibilidad);
