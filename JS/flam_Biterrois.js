// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "La flam’ Biterroise",
    "anecdote:",
    "Dans certains pays, ce n’est pas le Père Noël qui ramène les cadeaux.",
    "En Espagne par exemple, ce sont les Rois Mages le 6 janvier, le petit lutin pour la Suède,", 
    "et Befana en Italie qui n’est autre qu’une sorcière.",
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