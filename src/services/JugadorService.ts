import { IJugador } from "@/interfaces/IJugador";
import { JugadorRepository } from "@/repositories/JugadorRepository";



export class JugadorService {
    constructor(private jugadorRepository: JugadorRepository) {}

    private async throwIfJugadorExists(dataJugador: IJugador, id?: number): Promise<void> {
        const existJugador =  await this.jugadorRepository.existJugador(dataJugador, id);

        if(existJugador) {
            throw new Error('Jugador ya existe');
        }
    }

    async create(dataJugador: IJugador): Promise<IJugador> {
        await this.throwIfJugadorExists(dataJugador);

        return this.jugadorRepository.create(dataJugador);
    }

    async getAllJugadores(): Promise<IJugador[]> {
        const jugadores = await this.jugadorRepository.getAllJugadores();
        return jugadores;
    }

    async update(dataJugador: IJugador, id: number): Promise<IJugador> {
        await this.throwIfJugadorExists(dataJugador, id);

        return this.jugadorRepository.update(dataJugador, id);
    }
}