function infosLiens() {
    //Le nombre de liens dans la page web
    var aTotal = document.getElementsByTagName('a').length;
    console.log(aTotal);

    //La cible du premier et du dernier lien
    var linksElts = document.getElementsByTagName('a');
    console.log(linksElts[0].href);
    console.log(linksElts[aTotal - 1].href);
}

function possede(idElt, classElt) {
    var instrument = document.getElementById(idElt);
    if(instrument !== null) {
        if(instrument.classList.contains(classElt)) {
           console.log(true);
        } else {
            console.log(false);
        }
    } else {
       console.error('Cette ID n\'existe pas');
    }
}

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
