// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Vin chaud à l'ancienne",
    "anecdote:",
    "Selon Wikipédia, Noël commémore la naissance de Jésus-Christ ",
    "célébrée principalement le 25 décembre comme une célébration religieuse,",
    "et culturelle parmi des milliards de personnes à travers le monde.",
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