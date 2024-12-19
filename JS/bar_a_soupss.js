// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "<< Le bar à soupes",
    "anecdote:",
    " Le Père Noël tire ses origines de Saint Nicolas, très connu dans l’Est de la France.",
    "remonte au 14e siècle en Allemagne ",
    "sous l'appellation « Marché de Saint Nicolas »"
  ];
  
  let indexPhrase = -1; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }