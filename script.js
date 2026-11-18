// ---------- FOTOGALERIJ ----------
const galerijFotos = document.querySelectorAll(".galerij-grid img");
const groot = document.getElementById("groot");
const grootPlaatje = document.getElementById("groot-plaatje");
const sluiten = document.getElementById("sluiten");

sluiten.addEventListener("click", function () {
  groot.classList.remove("open");
});

// Klik op een foto: laat hem groot zien
galerijFotos.forEach(function (foto) {
  foto.addEventListener("click", function () {
    grootPlaatje.src = foto.src;
    groot.classList.add("open");
  });
});


// Kleine voorbeeld-interactie: klik op een bandlid om de uitleg te laten zien of te verbergen.
// Dit mag je later vervangen door je eigen idee.

// Pak alle blokjes van de bandleden
const blokjes = document.querySelectorAll(".blokje");

// Doe dit voor elk blokje
blokjes.forEach(function (blokje) {
  blokje.addEventListener("click", function () {
    // Zoek de extra uitleg in dit blokje
    const meer = blokje.querySelector(".meer");
    // Aan of uit zetten
    meer.classList.toggle("zichtbaar");
  });
});