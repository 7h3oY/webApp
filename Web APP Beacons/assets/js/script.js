var txtMail = document.getElementById("txtMail");
var txtPasword = document.getElementById("txtPasword");

document.getElementById("btnLogin").addEventListener("click", function() {
    // Obtener los valores de los campos de formulario
    var email = txtMail.value;
    var password = txtPasword.value;
    // Crear un objeto FormData para enviar los datos al PHP
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // Realizar la solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://nucleofactory.cl/phpBeacons/webapp/loginUsuario.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Manejar la respuesta del servidor
            console.log(xhr.responseText);
            if (xhr.responseText.startsWith("success;")) {
                var userData = xhr.responseText.split(";");
                var nombreUsuario = userData[1];
                alert("Inicio de sesión exitoso. ¡Bienvenido, " + nombreUsuario + "!");
                window.location.href = "dashboard.html";
            } else {
                alert("Credenciales incorrectas. Por favor, revisa los datos e inténtalo nuevamente.");
            }
        } else {
            console.log("Error en la solicitud AJAX");
            alert("Ocurrió un error. Por favor, revisa los datos e inténtalo nuevamente.");
        }
    };
    xhr.send(formData);
});

function showAlert(message) {
    var popup = document.createElement("div");
    popup.className = "error-popup";
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(function() {
        popup.remove();
    }, 5000); // Remover el popup después de 5 segundos
}


