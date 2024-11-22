
document.addEventListener('DOMContentLoaded', function () {

    let bouton = document.getElementById('changerCouleur');
    bouton.addEventListener('click', function () {
        let couleurs = ['#ff33c1', '#3633ff', '#33ffa8', '#FF33A6', '#33FFF6'];
        let couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
        document.body.style.backgroundColor = couleurAleatoire;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let boutonAjouter = document.getElementById('listeAjout');
    let zoneTexte = document.getElementById('nouveau');
    let liste = document.getElementById('liste');
    boutonAjouter.addEventListener('click', function () {
        let texte = zoneTexte.value.trim();
        if (texte !== '') {
            let nouvelElement = document.createElement('li');
            nouvelElement.textContent = texte;
            liste.appendChild(nouvelElement);
            zoneTexte.value = '';
        } else {
            alert('texte vide ! Vous devez rentrez du texte ');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
   
    let boutonCalculer = document.getElementById('addition');
    let nombre1 = document.getElementById('nombre1');
    let nombre2 = document.getElementById('nombre2');
    let resultat = document.getElementById('resultat');

    boutonCalculer.addEventListener('click', function () {
        let valeur1 = parseFloat(nombre1.value);
        let valeur2 = parseFloat(nombre2.value);

        if (!isNaN(valeur1) && !isNaN(valeur2)) {
            let somme = valeur1 + valeur2;
            resultat.textContent = "Somme est égal à " + somme;
        } else {
            resultat.textContent = "Ce n'est pas des nombres.";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let selectImage = document.getElementById('choixImage');
    let imageAffichee = document.getElementById('imageAffichee');
    selectImage.addEventListener('change', function () {

        let choix = selectImage.value;

        if (choix === "image1") {
            imageAffichee.src = "../../assets/css/images/blog-img1.jpg";
            imageAffichee.alt = "image 1";
        } else if (choix === "image2") {
            imageAffichee.src = "../../assets/css/images/blog-img2.jpg";
            imageAffichee.alt = "image 2";
        } else if (choix === "image3") {
            imageAffichee.src = "../../assets/css/images/blog-img3.jpg";
            imageAffichee.alt = "image 3";
        } else {
            imageAffichee.src = "";
            imageAffichee.alt = "Quel image ?";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById('souris');
    element.addEventListener('mouseover', function () {
        alert("tu as survoler ce texte :/");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function formaterTemps(temps) {
        if (temps < 10) {
            temps = '0' + temps;
        }
        return temps;
    }

    function heure() {
        let maintenant = new Date(); 

        let heure = formaterTemps(maintenant.getHours());
        let minute = formaterTemps(maintenant.getMinutes());
        let seconde = formaterTemps(maintenant.getSeconds());
        document.getElementById('heure').textContent = heure + ':' + minute + ':' + seconde;
    }
    setInterval(heure, 1000);
   heure();
});

document.addEventListener('DOMContentLoaded', function () {
    let boutonSupprimer = document.getElementById('suppression'); 
    let elementASupprimer = document.getElementById('supprimer'); 

    boutonSupprimer.addEventListener('click', function () {
    
        let confirmation = confirm("Etes vous certains de vouloir suppprimer ?");

        if (confirmation) {
            elementASupprimer.remove();
            alert("L'élément a été supprimé.");
        } else {
            alert("Suppression annulée.");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let compartiment= document.getElementById('toggle');
    let selection = document.getElementById('element');

    compartiment.addEventListener('change', function () {

        if (compartiment.checked) {
            selection.style.display = 'block';
        } else {
            selection.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let contact = document.getElementById('formulaire');
    contact.addEventListener('submit', function (event) {
        event.preventDefault();
        let nom = document.getElementById('nom').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        console.log('Nom : ' + nom);
        console.log('Email : ' + email);
        console.log('Message : ' + message);
        contact.reset();
    });
});
