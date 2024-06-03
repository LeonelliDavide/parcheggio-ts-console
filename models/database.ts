import { Parcheggio } from "./parcheggio";
import { Veicolo } from "./veicolo";

export class Database {
    parcheggio: Parcheggio

    constructor() {
        this.parcheggio = new Parcheggio("Reggio Emilia FS", "Via della stazione, Reggio Emilia", 123, 2);

        this.parcheggio.veicoli.push(new Veicolo('AA000AA'));
        this.parcheggio.veicoli.push(new Veicolo('BB000BB'));
    }
}