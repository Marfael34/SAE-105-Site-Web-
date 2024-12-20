// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "La caverne de calion",
    "anecdote:",
    "Selon foxintelligence, les cadeaux le plus offert en 2023,",
    " en france sont des legos",
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