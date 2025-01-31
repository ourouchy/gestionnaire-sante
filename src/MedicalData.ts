export abstract class MedicalData {
  constructor(public id: string, public date: string) {}
  abstract getDetails(): string;
}