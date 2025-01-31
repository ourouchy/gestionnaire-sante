import { MedicalData } from "./MedicalData"

export class Medicament extends MedicalData {
  constructor(
    id: string,
    date: string,
    public nom: string,
    public posologie: string
  ){super(id, date)}

  getDetails(): string {
    return `\n  - ID: ${this.id}, Nom: ${this.nom}, Posologie: ${this.posologie}`;
  }
}