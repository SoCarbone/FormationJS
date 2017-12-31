/*
Activité : gestion des contacts
*/

//Objets------------------------------------------------------------------------
var Contact = {
    init: function (lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    },

    displayContact: function () {
        console.log('Nom : ' + this.lastname + ', prénom : ' + this.firstname);
    },
}

//Initialisation des contacts
var contact1 = Object.create(Contact);
contact1.init('Lévisse', 'Carole');

var contact2 = Object.create(Contact);
contact2.init('Nelsonne', 'Mélodie');

//Ajout des contacts au tableau
var contacts = [contact1, contact2];

//Fonctions--------------------------------------------------------------------
//Affichage des choix + invite
function choicesMessage() {
    console.log('1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter');
    choice = parseInt(prompt('Quel est votre choix ?'));
}

//Début du programme------------------------------------------------------------
console.log('Bienvenue dans le gestionnaire de contacts !');

var choice;
choicesMessage();

//Gestion des cas
while (choice > 0) {

    if (choice === 1) {
        contacts.forEach(function (contact) {
            contact.displayContact();
        });

    } else if (choice === 2) {
        var lastname = prompt('Entrez le nom de famille :');
        var firstname = prompt('Entrez le prénom :');
        var new_contact = Object.create(Contact);
        new_contact.init(lastname, firstname);
        contacts.push(new_contact);
        console.log('Le contact a bien été enregistré');

    } else {
        //Cas ou on entre un mauvais choix
        alert('Attention ! Entrez un choix valide : 0, 1 ou 2');

    }

    choicesMessage();
}

console.log('Au revoir !');
