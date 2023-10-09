function calculateCost() {
    // Récupérer les valeurs du formulaire
    const duree_projet = document.getElementById("duree_projet").value;
    const taux_journalier_moyen = document.getElementById("taux_journalier_moyen").value;
    const nb_consultants = document.getElementById("nb_consultants").value;
    const CA = document.getElementById("CA").value;
    const nb_entites = document.getElementById("nb_entites").value;
    const cout_outils = document.getElementById("cout_outils").value;
    const frais_indirects = document.getElementById("frais_indirects").value;

    // Calcul des coefficients basés sur le CA et le nombre d'entités
    let coeff_CA = CA <= 10 ? 1.0 : CA <= 50 ? 1.1 : CA <= 100 ? 1.2 : CA <= 500 ? 1.3 : CA <= 1000 ? 1.4 : 1.5;
    let coeff_entites = nb_entites <= 5 ? 1.0 : nb_entites <= 15 ? 1.1 : nb_entites <= 30 ? 1.2 : nb_entites <= 50 ? 1.3 : 1.4;

    // Calcul du coût
    let cout_sans_marge = (duree_projet * taux_journalier_moyen * nb_consultants * coeff_CA * coeff_entites) + parseFloat(cout_outils) + parseFloat(frais_indirects);
    let marge_risque = 0.10 * cout_sans_marge;
    let cout_total = cout_sans_marge + marge_risque;

    // Afficher le résultat
    document.getElementById("result").innerHTML = "Le coût estimé est de: " + cout_total.toFixed(2) + " euros";
}