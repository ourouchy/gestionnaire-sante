"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Consultation_1 = require("./Consultation");
const Medicament_1 = require("./Medicament");
const Diagnostic_1 = require("./Diagnostic");
const Traitement_1 = require("./Traitement");
const MedicalCollection_1 = require("./MedicalCollection");
//  Création des collections
const consultations = new MedicalCollection_1.MedicalCollection();
const medicaments = new MedicalCollection_1.MedicalCollection();
const diagnostics = new MedicalCollection_1.MedicalCollection();
const traitements = new MedicalCollection_1.MedicalCollection();
// Fonction pour afficher les données
const afficherToutesLesDonnees = () => {
    console.log("\n Liste des consultations :\n", consultations.list());
    console.log("\n Liste des médicaments :\n", medicaments.list());
    console.log("\n Liste des diagnostics :\n", diagnostics.list());
    console.log("\n Liste des traitements :\n", traitements.list());
};
const diag1 = new Diagnostic_1.Diagnostic("d1", "2025-01-31", "Grippe sévère", "Élevée", "Respiratoire");
diagnostics.add(diag1);
const med1 = new Medicament_1.Medicament("m1", "2014-01-20", "Paracétamol", "500mg");
const med2 = new Medicament_1.Medicament("m2", "2019-12-15", "Ibuprofène", "200mg");
const med3 = new Medicament_1.Medicament("m3", "2009-07-25", "Doliprane", "1000mg");
const med4 = new Medicament_1.Medicament("m4", "2024-11-04", "Abacavir", "100mg");
medicaments.add(med1);
medicaments.add(med2);
medicaments.add(med3);
medicaments.add(med4);
const traitement1 = new Traitement_1.Traitement("t1", "2025-01-30", "2025-02-10", ["Paracétamol", "Ibuprofène"]);
traitements.add(traitement1);
const consultation1 = new Consultation_1.Consultation("c1", "2025-01-31", "Dr. Dupont");
consultation1.ajouterDiagnostic(diag1);
consultations.add(consultation1);
const consultation2 = new Consultation_1.Consultation("c2", "2025-01-31", "Dr. Lefebvre");
consultations.add(consultation2);
afficherToutesLesDonnees();
//  SUPPRESSION D’UN MÉDICAMENT
console.log("\n Suppression d'un médicament (Ibuprofène)");
console.log("\n Médicaments avant suppression :");
console.log(medicaments.list());
medicaments.remove("m2");
console.log("\n Médicaments après suppression :");
console.log(medicaments.list());
//  MISE À JOUR D'UN TRAITEMENT
console.log("\n Mise à jour d’un traitement (ajout d'un médicament)");
console.log("\n Traitements avant mise à jour :");
console.log(traitements.list());
traitements.update("t1", { medicaments: ["Paracétamol", "Vitamine C"] });
console.log("\n Traitements après mise à jour :");
console.log(traitements.list());
//  RECHERCHE D'UNE CONSULTATION PAR MÉDECIN
console.log("\n Recherche des consultations du Dr. Dupont");
const consultationsDrDupont = consultations.list().split("\n").filter(c => c.includes("Dr. Dupont"));
console.log(consultationsDrDupont.length > 0 ? consultationsDrDupont.join("\n") : "Aucune consultation trouvée.");
//  TRI DES MÉDICAMENTS PAR NOM
console.log("\n Tri des médicaments par ordre alphabétique");
console.log("\n Médicaments avant tri :");
console.log(medicaments.list());
medicaments.sortByName();
console.log("\n Médicaments après tri :");
console.log(medicaments.list());
//  STATISTIQUES : COMBIEN DE DIAGNOSTICS DANS "RESPIRATOIRE" ? AVANT AJOUT
console.log("\n Statistiques sur les diagnostics");
console.log("\n !!AVANT AJOUT!! Nombre de diagnostics dans la catégorie 'Respiratoire' :", diagnostics.countByCategory("Respiratoire"));
// AJOUT D'UN NOUVEAU DIAGNOSTIC À UNE CONSULTATION
console.log("\n Ajout d'un diagnostic à une consultation existante");
const diag2 = new Diagnostic_1.Diagnostic("d2", "2025-02-01", "Pneumonie", "Moyenne", "Respiratoire");
diagnostics.add(diag2);
consultation1.ajouterDiagnostic(diag2);
console.log("\n Consultation après ajout d'un diagnostic :");
console.log(consultation1.getDetails());
//  STATISTIQUES : COMBIEN DE DIAGNOSTICS DANS "RESPIRATOIRE" ? APRES AJOUT
console.log("\n Statistiques sur les diagnostics");
console.log("\n !!APRES AJOUT!! Nombre de diagnostics dans la catégorie 'Respiratoire' :", diagnostics.countByCategory("Respiratoire"));
// SUPPRESSION D’UNE CONSULTATION
console.log("\n Suppression d'une consultation");
console.log("\n Consultations avant suppression :");
console.log(consultations.list());
consultations.remove("c1");
console.log("\n Consultations après suppression :");
console.log(consultations.list());
