import { MedicalData } from "./MedicalData";

export class Traitement extends MedicalData {
    constructor(
        id: string,
        public dateDebut: string,
        public dateFin: string,
        public medicaments: string[]
    ) {
        super(id, dateDebut);
    }

    getDuration(): number {
        const debut = new Date(this.dateDebut);
        const fin = new Date(this.dateFin);
        return Math.ceil((fin.getTime() - debut.getTime()) / (1000 * 60 * 60 * 24));
    }

    getDetails(): string {
        return `\n- ID: ${this.id}, Durée: ${this.getDuration()} jours, Médicaments: ${this.medicaments.join(", ")}`;
    }
}
