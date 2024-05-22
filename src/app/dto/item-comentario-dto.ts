export class ItemComentarioDTO {
    constructor(
        public codigo: string,
        public calificacion: number,
        public mensaje: string,
        public respuesta: string

    ) { }
}