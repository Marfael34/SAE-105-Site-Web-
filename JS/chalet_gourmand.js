// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Le chalet gourmand",
    "anecdote:",
    "Selon Wikipédia, la pays où Noël commémore est le plus long sont les Philippines ",
    "ils commence à célèbrer au moi d'août avec de la musique de noël ",
    "et se termine la semaine suivant le Jour de l'an.",
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