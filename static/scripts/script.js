
function openNewWindow(event) {
    
    event.preventDefault();

    
    var newText = "Здесь вы можете оставить отзыв";
    window.open().document.write(newText);
}


var openWindowLink = document.getElementById('openWindowLink');

console.log(openWindowLink)



openWindowLink.addEventListener('click', openNewWindow);