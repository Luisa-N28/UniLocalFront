export class RechazarNegocioDTO {
    constructor(
        public codigoNegocio: string,
        public codigoModerador: string,
        public mensaje: string

    ) { }
}