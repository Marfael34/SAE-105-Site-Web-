// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "De la sève au sirop",
    "anecdote:",
    "Selon un article sur  le site statista publier le 12 décembre dernier, ",
    "la pays qui considère le sapin de Noël comme une tradition est le Mexique",
    "ou 69% des personne le juge indispensable.",
    "Vous êtes devant un chalet ..."
  ];
  
  let indexPhrase = -1; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }