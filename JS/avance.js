// liste phrase
const phrases = [
    "Choississez si vous voulez voir le chalet, ",
    "avancer ou revenir en arrière",
    "Vous avez avancer au niveau des 1er chalet"
  ];
  
  let indexPhrase = -1; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }