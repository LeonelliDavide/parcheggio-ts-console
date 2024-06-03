import { Database } from "../models/database";
import { Veicolo } from "../models/veicolo";

export class ParcheggiController {
    private db: Database;
    constructor(){
        this.db = new Database();
    }

    getAll(): Veicolo[] {
        return this.db.parcheggio.veicoli.filter(v => v.uscita === undefined);
    }

    getCount(): Number {
        return this.getAll().length;
    }

    addVeicolo(targa: string): boolean {
        //this.db.parcheggio.veicoli.push(new Veicolo(targa));
        return true;
    }
}