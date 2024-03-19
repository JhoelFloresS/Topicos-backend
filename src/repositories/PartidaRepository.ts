import { prisma } from "@/config/database";
import {IPartida} from "@/interfaces/IPartida";

export class PartidaRepository{

    async create(data: IPartida): Promise<IPartida>{
        const newPartida=await prisma.partidas.create({
            data:{
                fechaInicio: data.fechaInicio,
                fechaFin: data.fechaFin,
                organizadorId: data.organizadorId,
                reglaId: data.reglaId
            }
        })
        return newPartida;
    }

}