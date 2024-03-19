import { prisma } from "@/config/database";
import {IReglas} from "@/interfaces/IReglas";


export class ReglasRepository{
    async create(data: IReglas): Promise<IReglas>{
        const newRegla=await prisma.reglas.create({
            data:{
                monto: data.monto,
                moneda: data.moneda,
                formato: data.formato
            }
        })
        return newRegla;
    }
        
}