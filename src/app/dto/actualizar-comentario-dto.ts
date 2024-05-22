export class ActualizarComentarioDTO {
    constructor(
        public codigo: string = '',
        public codigoCliente: string = '',
        public respuesta: string = ''
    ) { }
}