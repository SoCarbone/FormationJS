function convertDollars(change, unit1, unit2) {
    var value1 = prompt('Entrer la valeur en ' + unit1);
    var value2 = value1 * change;

    alert(value1 + ' ' + unit1 + ' vaut :\n' + value2 + unit2); // \n est un saut de ligne
}

function isMajor() {
    var age = prompt('Quel age avez-vous ? (en années)');
    var majeur = (age >= 18);
    if (!age)
        alert('Veuillez entrer votre âge');
    else {
        if (majeur)
            alert('Vous êtes majeur'); //On ne met pas d'acolades s'il n'y a qu'une seule instructions, ce n'est pas la peine
        else
            alert('Vous êtes mineur');
    }
}

function isBeefy() {
    var height = prompt('Quel est votre taille ? (en cm)');
    var weight = prompt('Quel est votre poids ? (en kg)');
    var beefy = (height >= 180 || weight >= 90);
    if (beefy)
        alert('Oh oui, vous êtes un costaud !');
    else
        alert('Et non, vous êtes une fretelle !');
}

/*var nom = prompt("Entrez un nom d'animal"); //Utilisation de switch
switch(nom)
{
        case "chat":
                alert("Miaou !");
                break;
        case "chien":
                alert("Et PAF, le chien !");
                break;
        case "pingouin":
                alert("Bonjour, Tux");
                break;
        default:
                alert("Je n'ai rien à te dire...");
                break;
}*/

function theNextDay() {
    var today = prompt('Quel jour sommes-nous ?');
    if (today == 'lundi' || today == 'mardi' || today == 'mercredi' || today == 'jeudi' || today == 'vendredi' || today == 'samedi' || today == 'dimanche') {
        switch (today) {
            case 'lundi':
                nextDay = 'mardi';
                break;
            case 'mardi':
                nextDay = 'mercredi';
                break;
            case 'mercredi':
                nextDay = 'jeudi';
                break;
            case 'jeudi':
                nextDay = 'vendredi';
                break;
            case 'vendredi':
                nextDay = 'samedi';
                break;
            case 'samedi':
                nextDay = 'dimanche';
                break;
            case 'dimanche':
                nextDay = 'lundi';
                break;
        }
        alert('Demain nous serons ' + nextDay);
    } else {
        alert('Veuillez en entrer un jour valide');
    }
}
