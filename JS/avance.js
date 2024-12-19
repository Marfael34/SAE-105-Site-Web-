// liste phrase
const phrases = [
    "",
    "si vous voulez voir le marché  de jour ...",
    "ou de nuit en cliquant sur un des deux bouton ci-contre",
    "OH OH OH, je suis le père Noël de Béziers ! 🎅"
  ];
  
  let indexPhrase = 0; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }