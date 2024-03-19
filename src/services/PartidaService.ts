import { PartidaRepository } from "@/repositories/PartidaRepository";
import { IPartida } from "@/interfaces/IPartida";

export class PartidaService{
    constructor(private partidaRepository: PartidaRepository) {}
    
    async create(dataPartida: IPartida): Promise<IPartida> {
        return this.partidaRepository.create(dataPartida);
    }
}