
function aleatoire_image(id){
    document.getElementById("id")

    let randomTop = Math.floor(Math.random() *(94 - 1));
    let randomLeft = Math.floor(Math.random()*(94- 1));

    document.getElementById("myImage2").style.top=randomTop + "%"; 
    document.getElementById("myImage2").style.left=randomLeft + "%"; 

}


