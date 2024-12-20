// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "Office de tourrisme de Béziers",
    "anecdote:",
    "Comme le veut la tradition, il faut bien sûr envoyer sa lettre au Père Noël pour l’informer de ce que l’on souhaite, mais où ?",
    "Dans de nombreux pays, il suffit d’inscrire sur son enveloppe « Père Noël, Pôle Nord ou Laponie » pour que votre lettre soit acheminée.",
    "Fut un temps, nous l’appelions au 08-36-65-65-65",
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