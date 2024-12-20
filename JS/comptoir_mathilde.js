// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Le comptoir de Mathilde",
    "anecdote:",
    "Le calendrier de l’Aven que l’on accroche tous dans nos maisons à partir du 1er décembre,",
    "est d’origine Allemande, et servait à faire patienter les enfants jusqu’à Noël.", 
    "Par contre, pas de chocolats ou petits cadeaux à l’intérieur, mais plutôt des images religieuses,", 
    "comportant une phrase de l’Evangile ou une incitation à la bonne action.", 
    "Pas sûr que cela marche encore de nos jours…",
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