import { Diagnostic } from "./Diagnostic";
import { MedicalData } from "./MedicalData";

export class Consultation extends MedicalData{
  
  public diagnostics: Diagnostic[] = [];
  
  constructor(
    id: string,
    date: string,
    public medecin: string,
  ){super(id, date)}

  ajouterDiagnostic(diagnostic: Diagnostic): void {this.diagnostics.push(diagnostic)}

  getDetails(): string {
    const diagDetails = this.diagnostics.map(d => d.getDetails()).join("\n");
    return `\n  - ID: ${this.id}, Date: ${this.date}, Médecin: ${this.medecin}\n       Diagnostics de la consultation ${this.id}: ${diagDetails || "Aucun diagnostic"}`;
  }
}