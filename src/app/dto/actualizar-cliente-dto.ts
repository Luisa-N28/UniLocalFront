export class ActualizarClienteDTO {
    constructor(
        public codigo: string = '',
        public nombre: string = '',
        public fotoPerfil: string = '',
        public nickname: string = '',
        public ciudad: string = ''
    ) { }
}