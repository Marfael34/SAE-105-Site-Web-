// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Le Chalet Breton",
    "anecdote:",
    "C’est en 1521, que le fameux sapin de Noël fit son apparition",
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