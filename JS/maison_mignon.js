// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Maison Mignon",
    "anecdote:",
    "Selon un article publier en 2022, par le média Brut., ",
    "en 13 ans plus de 300 films ont été diffusés",
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