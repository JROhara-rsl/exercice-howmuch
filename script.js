// 1 - Sélectioner des éléments de la page HTML
const form = document.getElementById('form');
const input = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const cartouche = document.getElementById('cartouche');
const restartButton = document.getElementById('restart');

// 2 - Générer un nombre aléatoire
// Arrow function qui donne un chiffre entre min et max
var nbRandom = (min, max) => Math.floor(Math.random() * max + min);
var goodNb = nbRandom(1, 100);
console.log(goodNb);
var essai = 0;

// 3 - Créer des blocs de cartouche pour répresenter le nombre d'essaie qu'il reste
function cartouchesRestantes(){
    cartouche.innerHTML = "";
    for (var i = 6; i > essai; i=i-1) {
        cartouche.innerHTML += "<div></div>";
    }
}

cartouchesRestantes();


// Écoute l'événement "submit" du formulaire
form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        const userNb = parseInt(input.value, 10);
        if (essai < 5) {
            essai++;
            cartouchesRestantes();
            if (userNb > goodNb) {
                feedback.textContent = userNb + " est trop grand ! Essaye encore !";
            } else if (userNb < goodNb) {
                feedback.textContent = userNb + " est trop petit ! Essaye encore !";
            } else {
                feedback.textContent = "BRAVO !!! En " + essai + " essais, tu as trouvé le nombre : " + goodNb + ".";
            }
        } else {
            feedback.textContent = "Tu as été trop long, le bon nombre était " + goodNb + ". On recommence avec un nouveau nombre.";

            // Affiche le dernier essai fini
            essai++;
            cartouchesRestantes();

            // Réinitialise le jeu
            essai = 0;
            goodNb = (nbRandom(1, 100));
        }      

    input.value = ''; // Pour vider la zone
});

restartButton.addEventListener('click', function(event) {
    essai = 0;
    goodNb = (nbRandom(1, 100));
    cartouchesRestantes();
    feedback.textContent = "Allez,  c'est reparti !"
});