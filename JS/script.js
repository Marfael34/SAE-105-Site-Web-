// Fonction pour changer de page page 
function changerDePage_JN() { // menne vers la page jourNuit.html
    // Redirection vers une autre URL
    window.location.href ="../HTML/jourNuit.html";
  }

function changerDePage_ENTMJ() { // menne vers une autre page
    // Redirection vers une autre URL
    window.location.href ="https://www.youtube.com/watch?v=BBJa32lCaaY&ab_channel=LegacyPNDA";
  }

function changerDePage_ENTMN() { // menne vers la page entre_marche_nuit.html
    // Redirection vers une autre URL
    //window.location.href ="./entre_marche_nuit.html";
    window.location.href ="../HTML/entre.html";
  }

// liste phrase
    const phrases = [
      "je suis le père Noël de Béziers ! 🎅",
      "Avec mon renne on vous invite à choisir ...",
      "si vous voulez visiter le marché de jour ...",
      "ou de nuit en cliquant avec les bouton ci-contre",
      "OH OH OH !"
    ];
    
    let indexPhrase = -1; // Index de la phrase actuelle

    // Fonction pour changer la phrase dans la bulle 
    function changerPhrase() {
        // Incrémenter l'index et revenir à zéro si la fin est atteinte
        indexPhrase = (indexPhrase + 1) % phrases.length;
        // Changer le texte de la bulle
        document.getElementById("bulle").innerText = phrases[indexPhrase];
    }