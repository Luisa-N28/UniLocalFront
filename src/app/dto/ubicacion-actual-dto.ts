import { Ubicacion } from "./ubicacion";

export class UbicacionActualDTO {
    constructor(
        public codigoUsuario: string,
        public ubicacion: Ubicacion,

    ) { }
}