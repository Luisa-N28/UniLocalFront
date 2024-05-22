import { TipoNegocio } from "./tipo-negocio";

export class ItemNegocioDTO {
    constructor(
        public codigo: string,
        public ubicacion: Ubicacion,
        public nombre: string,
        public descripcion: string,
        public fotoPrimera: string,
        public tipoNegocio: TipoNegocio,
        public puntuacion: number

    ) { }
}