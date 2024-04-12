$( document ).ready(function(){

    $("p span").hover(function() {
    
        $(this).replaceWith("<img class='cat-img' src=img/cat_with-mouse.png>")
    });

});
