"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diagnostic = void 0;
const MedicalData_1 = require("./MedicalData");
class Diagnostic extends MedicalData_1.MedicalData {
    constructor(id, date, description, severite, categorie) {
        super(id, date);
        this.description = description;
        this.severite = severite;
        this.categorie = categorie;
    }
    getDetails() {
        return `\n  - ID: ${this.id}, Description: ${this.description}, Sévérité: ${this.severite}, Catégorie: ${this.categorie}`;
    }
}
exports.Diagnostic = Diagnostic;
