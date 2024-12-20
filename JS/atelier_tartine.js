// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "L'atelier de mamie Tartine ",
    "anecdote:",
    " Saviez-vous que la Buche de Noël est une tradition Française ?",
    "Autrefois, la bûche ne se mangeait pas et elle était autre qu’une vraie bûche de bois.",
    "Cette dernière était coupée pour les fêtes, puis mise au feu au retour de la messe de minuit.", 
    "La suite? Elle brûlait jusqu’au lendemain matin et tenait la maison au chaud.", 
    "Les restes étaient conservés toute l’année, pour protéger la maison,",
    "puis remis au feu l’année suivante avec la nouvelle bûche.", 
    "Pour ce qu’il en est de la pâtisserie, elle vit le jour en 1945.",
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