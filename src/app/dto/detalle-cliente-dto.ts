import { Bloqueo } from "./bloqueo";

export class DetalleClienteDTO {
    constructor(
        public codigo: string = '',
        public nombre: string = '',
        public email: string = '',
        public fotoPerfil: string = '',
        public nickname: string = '',
        public ciudad: string = '',
        public telefonos: string[] = [],
        public historial: string[] | null = null,
        public favoritos: string[] | null = null,
        public bloqueos: Bloqueo[] | null = null

    ) { }
}