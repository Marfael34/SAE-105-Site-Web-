// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "The hidden distillery",
    "anecdote:",
    "<<Jingle Bells>>, l'un des chants de Noël les plus entraînants,a une histoire intéressante.", 
    "Initialement composé par James Lord Pierpont en 1857, il n'était pas destiné à Noël, mais plutôt à Thanksgiving.",
    "Cependant, en raison de son ambiance joyeuse, il est devenu un incontournable des célébrations de fin d'année.",
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