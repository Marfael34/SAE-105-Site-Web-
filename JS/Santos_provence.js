// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Santos de provence",
    "anecdote:",
    "En 1647, le Parlement anglais a interdit la célébration de Noël en considérant les festivités comme immorales.", 
    "Cette interdiction a été levée en 1660, permettant le retour des célébrations de Noël en Angleterre.",
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