var btnRegistro = document.getElementById("btnRegistro");
var txtMail = document.getElementById("txtMail");
var txtPasword = document.getElementById("txtPasword");
var txtNombre = document.getElementById("txtNombre");
var txtApellido = document.getElementById("txtApellido");
var sltCargo = document.getElementById("sltCargo");

class Usuario {
    constructor(firstName, lastName, email, password) {
        this.Id = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.loginDate = "";
        this.edad = "";
        this.fono = "";
        this.sexo = "";
    }
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
document.getElementById("btnRegistro").addEventListener("click", function() {
    // Obtener los valores de los campos de formulario
    var firstName = txtNombre.value;
    var lastName = txtApellido.value;
    var email = txtMail.value;
    var password = txtPasword.value;
    var idUsuario = generateUUID();
    var loginDate = new Date().toISOString();
    // Crear un objeto FormData para enviar los datos al PHP
    var formData = new FormData();
    formData.append("Id", idUsuario); // Agrega el campo Id si es necesario
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("loginDate", loginDate); // Agrega el campo loginDate si es necesario

    // Realizar la solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://nucleofactory.cl/phpBeacons/webapp/registroUsuario.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Manejar la respuesta del servidor
            console.log(xhr.responseText);
            alert(xhr.responseText);
            if (xhr.responseText === "Registro y tipo de usuario insertados correctamente") {
                window.location.href = "index.html";
            }
        }else{
            console.log("Error en la solicitud AJAX");
            showAlert("Ocurrió un error durante el registro. Por favor, inténtalo nuevamente.");
        }
    };
    xhr.send(formData);
});
function generateUUID() {
    return uuidv4(); // Asegúrate de que la función uuidv4() esté disponible
}
function showAlert(message) {
    var popup = document.createElement("div");
    popup.className = "error-popup";
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(function() {
        popup.remove();
    }, 5000); // Remover el popup después de 5 segundos
}

