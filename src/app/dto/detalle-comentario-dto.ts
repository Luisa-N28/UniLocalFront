export class DetalleComentarioDTO {
    constructor(
        public codigo: string = '',
        public calificacion: number = 0,
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public mensaje: string = '',
        public respuesta: string = ''
    ) { }
}