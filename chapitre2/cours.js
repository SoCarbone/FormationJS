var titlesElts = document.getElementsByTagName('h2'); //Tous les éléments H2
console.log(titlesElts[0]); //Affiche le premier H2
console.log(titlesElts.length); //Affiche le nombre de H2

//Récupérer les éléments par leur classe
var merveillesElts = document.getElementsByClassName('merveilles');
for(var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

//Récupérer les éléments par leur ID
console.log(document.getElementById('nouvelles'));

console.log(document.querySelectorAll('p').length);

console.log(document.querySelectorAll('#contenu p').length);

console.log(document.querySelectorAll('.existe').length);

console.log(document.querySelectorAll('#antiques > .existe').length); //Compte tous les .existe dont le parent est #antiques

//Le contenu HTML de l'élément identifié par 'contenu'
console.log(document.getElementById('contenu').innerHTML);

console.log(document.getElementById('contenu').textContent); // meêm chose mais sans les balises HTML

console.log(document.querySelector('a').getAttribute('href')); //Renvoie la valeur de l'attribut selectionné

//Pour les attributs id href et value, on peut les récupérer directement
console.log(document.querySelector('a').href);

if(document.querySelector('a').hasAttribute('target')) {
    console.log('Le premier lien possède l\'attribut target');
} else {
    console.log('Le premier lien ne possède pas l\'attribut target');
}

