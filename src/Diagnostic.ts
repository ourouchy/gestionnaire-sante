import { MedicalData } from "./MedicalData";

export class Diagnostic extends MedicalData {
  constructor(
    id: string,
    date: string,
    public description: string,
    public severite: string,
    public categorie: string
  ){super(id, date)}

  getDetails(): string {
    return `\n  - ID: ${this.id}, Description: ${this.description}, Sévérité: ${this.severite}, Catégorie: ${this.categorie}`;
  }

}