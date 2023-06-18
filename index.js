
const clientes = [
    { nombre: "Mali", password: "password", cuenta: "cuenta1" },
    { nombre: "Joss", password: "123", cuenta: "cuenta2" },
    { nombre: "Jenny", password: "abcd", cuenta: "cuenta3" },
];

function validarCredenciales(u, c) {
    const cliente = clientes.find(
        (cliente) => cliente.nombre === u && cliente.password === c
    );
    return cliente ? cliente.cuenta : null;
}

function login() {
    var userName = document.getElementById("u").value;
    var password = document.getElementById("c").value;

    var cuenta = validarCredenciales(userName, password);
    if (cuenta) {
        location.href = cuenta + ".html";
    } else {
        alert("Error Usuario o Contraseña! :)");
    }
}