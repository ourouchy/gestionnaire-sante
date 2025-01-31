"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultation = void 0;
const MedicalData_1 = require("./MedicalData");
class Consultation extends MedicalData_1.MedicalData {
    constructor(id, date, medecin) {
        super(id, date);
        this.medecin = medecin;
        this.diagnostics = [];
    }
    ajouterDiagnostic(diagnostic) { this.diagnostics.push(diagnostic); }
    getDetails() {
        const diagDetails = this.diagnostics.map(d => d.getDetails()).join("\n");
        return `\n  - ID: ${this.id}, Date: ${this.date}, Médecin: ${this.medecin}\n       Diagnostics de la consultation ${this.id}: ${diagDetails || "Aucun diagnostic"}`;
    }
}
exports.Consultation = Consultation;
