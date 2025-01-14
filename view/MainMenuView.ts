import * as rl from 'readline-sync';
import { ParcheggiController } from '../controller/ParcheggiController';

export class MainMenuView {
    static show(): void {
        let controller = new ParcheggiController();

        let scelta: number;

        do {
            console.log('GESTIONE PARCHEGGIO ACME.INC');
            console.log('----------------------------');
            console.log('');
            console.log('1 - Elenco veicoli');
            console.log('2 - Numero veicoli presenti');
            console.log('');
            console.log('9 - Esci');
            console.log('');

            scelta = rl.questionInt('Inserire la scelta: ')

            switch (scelta) {
                case 1:
                    controller.getAll().forEach(v => console.log(`${v.targa} - Entrato: ${v.ingresso}`));
                    break;
                case 2:
                    console.log(`sono presenti ${controller.getCount()} veicoli`);
                    break;
                case 9:
                    break;
                default:
                    console.log('Inserire un numero valido');
                    break;
            }
        } while (scelta != 9);
    }
}