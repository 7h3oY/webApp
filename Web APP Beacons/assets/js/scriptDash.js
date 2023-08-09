document.getElementById("btnCargar").addEventListener("click", function() {
    // Obtener los valores de los campos de formulario
    var titulo = document.getElementById("tituloNotif").value;
    var txtDescripcion = document.getElementById("textoArchivo").value;
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