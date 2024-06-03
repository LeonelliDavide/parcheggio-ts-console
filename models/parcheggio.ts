import { Veicolo } from "./veicolo";

export class Parcheggio {
    veicoli: Veicolo[] = [];

    constructor(public nome: String, public indirizzo: String, public capienza: Number, public tariffaOraria: Number) {
        this.veicoli = [];
    }
}