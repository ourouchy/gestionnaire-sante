"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Traitement = void 0;
const MedicalData_1 = require("./MedicalData");
class Traitement extends MedicalData_1.MedicalData {
    constructor(id, dateDebut, dateFin, medicaments) {
        super(id, dateDebut);
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.medicaments = medicaments;
    }
    getDuration() {
        const debut = new Date(this.dateDebut);
        const fin = new Date(this.dateFin);
        return Math.ceil((fin.getTime() - debut.getTime()) / (1000 * 60 * 60 * 24));
    }
    getDetails() {
        return `\n- ID: ${this.id}, Durée: ${this.getDuration()} jours, Médicaments: ${this.medicaments.join(", ")}`;
    }
}
exports.Traitement = Traitement;
