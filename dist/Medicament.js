"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicament = void 0;
const MedicalData_1 = require("./MedicalData");
class Medicament extends MedicalData_1.MedicalData {
    constructor(id, date, nom, posologie) {
        super(id, date);
        this.nom = nom;
        this.posologie = posologie;
    }
    getDetails() {
        return `\n  - ID: ${this.id}, Nom: ${this.nom}, Posologie: ${this.posologie}`;
    }
}
exports.Medicament = Medicament;
