import { ReglasRepository } from "@/repositories/ReglasRepository";
import { IReglas } from "@/interfaces/IReglas";

export class ReglasService{
    constructor(private reglasRepository: ReglasRepository) {}

    async create(dataReglas: IReglas): Promise<IReglas> {
        return this.reglasRepository.create(dataReglas);
    }
}