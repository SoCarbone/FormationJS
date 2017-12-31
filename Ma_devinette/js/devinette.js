/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

var i = 1;
var trials = 6;//Afin de pouvoir paramétrer le nombre d'essais possibles
var inviteMessage = 'Proposer un chiffre entre 0 et 100';
var lostMessage = 'Perdu... La solution était ' + solution;
var winMessage = 'Bravo ! La solution est bien ' + solution;

while (i <= trials) {

    //Différentes version du texte d'invitation à entrer un chiffre.
    if(i === 1) {
        playerNumber = prompt('Trouver le bon chiffre. \n' + inviteMessage + '\nVous avez '+ trials +' essais');
    } else if(i >= 2 && i < trials) {
        var remainingTests = trials - i + 1; //Compteur d'essais' restants
        playerNumber = prompt(inviteMessage + '\nIl vous reste ' + remainingTests + ' essais');
    } else {
        playerNumber = prompt(inviteMessage + '\nAttention ! C\'est votre dernier essai')
    }

    //Traitement des différents cas de réponse.
    if(playerNumber < solution) { //La proposition est trop petite
        if(i < trials) {
            console.log(playerNumber + ' est trop petit');
        } else {
            console.log(lostMessage);
        }
        i++;
    } else if(playerNumber > solution) { //La proposition est trop grande
        if(i < trials) {
            console.log(playerNumber + ' est trop grand');
        } else {
            console.log(lostMessage);
        }
        i++;
    } else {
        if(i === 1) {
            console.log(winMessage + '\nVous avez trouvé en un seul essai !');
        } else {
            console.log(winMessage + '\nVous avez trouvé en ' + i + ' essais');
        }
        break; //Pour arrêter la boucle
    }
}
