

function aleatoire_image(id){
    document.getElementById("id")

    let randomTop = Math.floor(Math.random() *(500 - 1));
    let randomLeft = Math.floor(Math.random()*(500 - 1));

    document.getElementById("myImage2").style.top=randomTop + "px"; 
    document.getElementById("myImage2").style.left=randomLeft + "px"; 

}

