$(document).ready(function(){

    $('.container').load('/home.html');

    // Función que cargará páginas dinamicamente en el div container en vez de redireccionar
    $("#menu a").click(function(e){
        e.preventDefault();
        var href_seleccionado = e.target.href

        if (this.className.includes("dropdown")) {
            return false;
        }

        // Si la URL contiene main.html, hacemos un redirect a main.html
        if (href_seleccionado.includes("main.html") || href_seleccionado.includes("#")){
            $(location).attr("href", "./main.html")
        } else {
            // Aquí cargamos dinamicamente el valor del atributo href del link
            $('.container').load(href_seleccionado);
        }
        $('.active').not(this).removeClass('active');
        $(this).addClass('active');
        return false;
    });

});