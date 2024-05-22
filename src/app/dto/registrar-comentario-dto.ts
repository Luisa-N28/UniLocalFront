export class RegistrarComentarioDTO {
    constructor(
        public calificacion: number,
        public mensaje: string,
        public codigoCliente: string,
        public codigoNegocio: string

    ) { }
}