// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "La gorge fraiche",
    "anecdote:",
    "En 2012, en Thaïlande, une foule de 4 177 personnes a participé au plus grand échange de cadeaux simultané.",
    "Cet événement colossal a permis de créer une atmosphère festive et de souligner l'aspect universel du partage",
    "et de la générosité pendant la saison des fêtes.",
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