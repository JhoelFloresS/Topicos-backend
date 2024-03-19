import { prisma } from "@/config/database";
import { IJugador } from "@/interfaces/IJugador";


export class JugadorRepository {
    async create(data: IJugador): Promise<IJugador> {
        const newJugador = await prisma.jugadores.create({
            data: {
                nombre: data.nombre,
                telefono: data.telefono,
                email: data.email,
            }
        })
        return newJugador;
    }

    async existJugador(data: IJugador, id?: number): Promise<boolean> {
        const existJugador = await prisma.jugadores.findFirst({
            where: {
                email: data.email,
                NOT: {
                    id
                }
            },
        });

        return existJugador ? true : false;
    }

    async getAllJugadores(): Promise<IJugador[]> {
        const jugadores = await prisma.jugadores.findMany();
        return jugadores;
    }


    async update(data: IJugador, id: number): Promise<IJugador> {
        const jugadorUpdate = await prisma.jugadores.update({
            where: {
                id
            },
            data: {
                nombre: data.nombre,
                telefono: data.telefono,
                email: data.email,
            }
        });

        return jugadorUpdate;
    }
}