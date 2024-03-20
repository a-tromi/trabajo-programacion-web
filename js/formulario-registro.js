$(document).ready(function(){
    
    $('#form_usuario').submit(function(e){
        //preventDefault() evita que el formulario se envíe por defecto, ya que primero validaremos.
        e.preventDefault();
        var username = $("#txt_username").val();
        var email = $("#txt_email").val();
        var password = $("#txt_password").val();
        var pasword2 = $("#txt_password2").val();
        var fecha_nac = $("#txt_fecha_nac").val();
    
        // Validación campos vacíos
        if (username == "" || email == "" ||
            password == "" || pasword2 == "" || fecha_nac == "" )
        {
            alert("Debe ingresar campos obligatorios");
            return false;
        }

        // Validación que las dos contraseñas sean iguales
        if (password != pasword2)
        {
            alert("Contraseñas deben ser iguales entre si");
            return false;
        }

        // Validación de rango de longitud de contraseña entre 6 y 18 caracteres
        if (password.length < 6 || password.length > 18)
        {
            alert("Contraseña debe tener una longitud entre 6 y 18 caracteres");
            return false;
        }

        /*
        var passwordPattern = /^(?=.\d)(?=.[A-Z])[a-zA-Z\d]{6,18}$/;
        if (!passwordPattern.test(password)) {
            alert("La contraseña debe contener al menos un número y una letra en mayúscula y tener entre 6 y 18 caracteres");
            return false;
        }
        */

        // Validación para que la persona no sea a menor de 18 años
        var anios = calcular_anios(fecha_nac);
        console.log("años obtenidos: " + anios);

        if (anios < 18){
            alert("Persona no puede ser menor de 18 años");
            return false;
        }

    });

    function calcular_anios(fecha_nac){
        var today = new Date();
        var birthDate = new Date(fecha_nac);
        var age = today.getFullYear() - birthDate.getFullYear();

        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

});