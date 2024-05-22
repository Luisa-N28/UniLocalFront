export class CambioPasswordDTO {
    constructor(
        public codigoCuenta: string = '',
        public passwordNueva: string = '',
        public codigoRecuperacion: string = ''
    ) { }
}