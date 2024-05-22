import { LocalDateTime } from "@js-joda/core";

export class ActualizarReporteDTO {
    constructor(
        public codigo: string = '',
        public horaInicio: LocalDateTime,
        public mensaje: string = '',
        public codigoComentario: string = ''

    ) { }
}