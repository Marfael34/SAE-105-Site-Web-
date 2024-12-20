// liste phrase
const phrases = [
   "Le nom de ce chalet est : ",
    "Les pulls moche de noël",
    "anecdote:",
    "Le premier film de noël est arriver dés le début du cinéma muet en 1898,",
    "du nom de << Saint-Nicolas>> ",
  ];
  
  let indexPhrase = -1; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }