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
            $(location).attr("href", "./main.html") // REDIRECT a la página main.html
        } else {
            // Aquí cargamos dinamicamente el valor del atributo href del link
            $('div.container').load(href_seleccionado);
        }
        $('.active').not(this).removeClass('active');
        $(this).addClass('active');
        $(".show").removeClass("show");

        return false;
    });

    // Función para ocultar cualquier link dentro de los "dropdown-menu" (Categorías Juegos o Nombre Usuario)
    $('.dropdown-menu a').click(function(e){
        e.preventDefault();
        $(".show").removeClass("show");        
    });


    // Función para ocultar elementos con clase "dropdown" ajenos al dropdown que clickeamos
    $('.dropdown > a').click(function(e){
        e.preventDefault();
        // selectores para encontrar elementos por jerarquía (padres, hermanos o siblings, hijos)
        var element = $(this).parent().siblings().children('.show');
        $(element).removeClass("show");
    });

});
