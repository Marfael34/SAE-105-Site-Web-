// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Le bar à soupes",
    "anecdote:",
    " Le Père Noël tire ses origines de Saint Nicolas, très connu dans l’Est de la France.",
    "Saint Nicolas ramenait des bonbons ou jouets aux enfants gentils, et son acolyte le Père Fouettard donnait du charbon aux méchants ",
    "Ainsi un Américain du nom de Clément Moore, écrivit en 1821 un conte de Noël",
    "où un homme barbu, distribuait des cadeaux aux enfants à travers le monde, tiré par des rennes.",
    "Sa couleur rouge grâce à Coca-Cola? ...",
    "Juste une légende."
  ];
  
  let indexPhrase = -1; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }