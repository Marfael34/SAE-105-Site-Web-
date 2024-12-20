// liste phrase
const phrases = [
    "Le nom de ce chalet est : ",
    "SerGine et Fanny",
    "anecdote:",
    "Le renne au nez rouge",
    "Aussi connu sous le nom de Rudolph, est né en 1939 grâce à Robert L. May,",
    "un employé de Montgomery Ward, qui a créé cette histoire pour une campagne publicitaire de Noël.",
    "La popularité de Rudolph a rapidement augmenté, aboutissant à la création du célèbre poème et de la chanson. ",
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