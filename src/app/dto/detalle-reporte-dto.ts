import { LocalDateTime } from "@js-joda/core";

export class DetalleReporteDTO {
    constructor(
        public codigo: string = '',
        public horaInicio: LocalDateTime | null = null,
        public mensaje: string = '',
        public codigoComentario: string = ''

    ) { }
}