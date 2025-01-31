"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalCollection = void 0;
const Diagnostic_1 = require("./Diagnostic");
class MedicalCollection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    list() {
        return this.items.map(item => item.getDetails()).join("\n");
    }
    countByCategory(category) {
        return this.items.filter(item => item instanceof Diagnostic_1.Diagnostic && item.categorie === category).length;
    }
    update(id, newData) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            Object.assign(item, newData);
        }
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
    sortByName() {
        this.items.sort((a, b) => {
            if (this.hasNom(a) && this.hasNom(b)) {
                return a.nom.localeCompare(b.nom);
            }
            return 0;
        });
    }
    hasNom(obj) {
        return obj.nom !== undefined;
    }
}
exports.MedicalCollection = MedicalCollection;
