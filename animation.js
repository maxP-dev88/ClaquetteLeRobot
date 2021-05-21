let vOeilD = document.getElementById("oeilDroit"); /*variable de l'oeil droit */
let vOeilG = document.getElementById("oeilGauche");
let vBrasG = document.getElementById("brasGauche");
vOeilD.addEventListener("click", monterDescendre); /*note : cible.addEventListener("nom_événement", fonction_à_déclancher)*/
vOeilG.addEventListener("click", monterDescendre);
vBrasG.addEventListener("click", decalerGD);

/*pour la suite il suffit de créer une fonction pour monterDescendre*/

function monterDescendre(e) /*tête de définition de la fonction*/ {
    let robotPart = e.target; /* récupération d'un objet dans une variable */
    let pos = 0;/*variable de position valeur 0 afin de changer la valeur*/
    let id = setInterval(frame, 10); // toutes les 10 ms, fréquence de répétition fourni par la valeur (10) dans l'exemple (1000ms=1sec)


    function frame()/*petite fonction imbriquée dans la précédente*/ {
        robotPart.style.top = pos + '%';/*utilisation la valeur "pos" en ajoutant "%" (si click la variable = 0%) */
        pos++; /*voir chapitre 9*/
        if (pos === 20) /*indique une valeur a variable "pos"*/ {
            clearInterval(id);/*exécutions de l'instruction var "id"*/
        }
    }
}/*attention à bien décaler les accolades*/


function decalerGD(e) {
    let robotPart = e.target;
    let gauche = 0;
    let id = setInterval(frame, 10)

    function frame() {
        robotPart.style.left = gauche + '%';
        gauche++;
        if (gauche === 70) {
            clearInterval(id);
        }
    }
} /*même principe que précédement mais pour le bras gauche*/