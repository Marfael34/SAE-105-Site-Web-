// Fonction pour changer de page page 
function changerDePage_JN() { // menne vers la page jourNuit.html
    // Redirection vers une autre URL
    window.location.href ="./jourNuit.html";
  }

function changerDePage_ENTMJ() { // menne vers la page entre_marche_jour.html
    // Redirection vers une autre URL
    window.location.href ="./entre_marche_jour.html";
  }

function changerDePage_ENTMN() { // menne vers la page entre_marche_nuit.html
    // Redirection vers une autre URL
    window.location.href ="./entre_marche_nuit.html";
  }




// liste phrase
    const phrases = [
      "Avec mon renne on vous invite à choisir ...",
      "si vous voulez voir le marché  de jour ...",
      "ou de nuit en cliquant sur un des deux bouton ci-contre",
      "OH OH OH, je suis le père Noël de Béziers ! 🎅"
    ];
    
    let indexPhrase = 0; // Index de la phrase actuelle

    // Fonction pour changer la phrase dans la bulle 
    function changerPhrase() {
        // Incrémenter l'index et revenir à zéro si la fin est atteinte
        indexPhrase = (indexPhrase + 1) % phrases.length;
        // Changer le texte de la bulle
        document.getElementById("bulle").innerText = phrases[indexPhrase];
    }