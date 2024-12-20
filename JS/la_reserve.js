// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "La reserve",
    "anecdote:",
    "La tradition des chaussettes de Noël trouve son origine dans un conte du 19e siècle,",
    "où Saint Nicolas aurait glissé de l'or dans les bas d'une jeune fille nécessiteuse.",
    "Cette histoire a contribué à populariser la coutume d'accrocher des chaussettes pour recevoir des cadeaux de Noël.",
    "ous êtes devant un chalet ..."
  ];
  
  let indexPhrase = -1; // Index de la phrase actuelle

  // Fonction pour changer la phrase dans la bulle 
  function changerPhrase() {
      // Incrémenter l'index et revenir à zéro si la fin est atteinte
      indexPhrase = (indexPhrase + 1) % phrases.length;
      // Changer le texte de la bulle
      document.getElementById("bulle").innerText = phrases[indexPhrase];
  }