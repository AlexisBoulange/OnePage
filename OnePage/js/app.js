//Dans le document, je recherche le selecteur avec la class burger, je lui demande d'écouter les événements de type "click". Lorsqu'il entend le click, il execute une fonction
document.querySelector(".burger").addEventListener("click", function () {  
//toggle = alterner  //dans le document, on recherche le selecteur .nav, on regarde sa liste de class, et on lui demande d'alterner entre ajouter/supprimer la class visible
document.querySelector("nav .nav").classList.toggle("visible");
});
