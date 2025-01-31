import { Diagnostic } from "./Diagnostic";
import { MedicalData } from "./MedicalData";

export class MedicalCollection<T extends MedicalData> {
  private items: T[] = [];

  add(item: T): void{
    this.items.push(item);
  }

  remove(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  list(): string {
    return this.items.map(item => item.getDetails()).join("\n")
  }

  countByCategory(category: string): number {
    return this.items.filter(item => item instanceof Diagnostic && item.categorie === category).length;
}

  update(id: string, newData: Partial<T>): void {
    const item = this.items.find(i => i.id === id);
    if(item) {
      Object.assign(item, newData)
    }
  }
  findById(id: string): T | undefined {
    return this.items.find(item => item.id === id);
  }
  


  sortByName(): void {
    this.items.sort((a, b) => {
        if (this.hasNom(a) && this.hasNom(b)) {
            return a.nom.localeCompare(b.nom);
        }
        return 0;
    });
  }

  private hasNom(obj: any): obj is { nom: string } {
    return (obj as { nom?: string }).nom !== undefined;
  }

}