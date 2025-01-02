// 1 - Sélectioner des éléments de la page HTML
const form = document.getElementById('form');
const input = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');

// 2 - Générer un nombre aléatoire
// Arrow function qui donne un chiffre entre min et max
var nbRandom = (min, max) => Math.floor(Math.random() * max + min);
var goodNb = nbRandom(1, 100);
console.log(goodNb);
var essai = 0;

// Écoute l'événement "submit" du formulaire
form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        const userNb = parseInt(input.value, 10);
        if (essai < 6) {
            essai++;
            
            if (userNb > goodNb) {
                feedback.textContent = userNb + " est trop grand ! Essaye encore !";
            } else if (userNb < goodNb) {
                feedback.textContent = userNb + " est trop petit ! Essaye encore !";
            } else {
                feedback.textContent = "BRAVO !!! En " + essai + " essais, tu as trouvé le nombre : " + goodNb + ".";
            }
        } else {
            feedback.textContent = "Tu as été trop long, on recommence avec un nouveau nombre.";
            essai = 0;
            goodNb = (nbRandom(1, 100));
        }      

    input.value = ''; // Pour vider la zone
});