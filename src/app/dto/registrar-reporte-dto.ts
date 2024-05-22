import { LocalDateTime } from "@js-joda/core";

export class RegistrarReporteDTO {
    constructor(
        public horaInicio: LocalDateTime | null,
        public mensaje: string,
        public codigoComentario: string

    ) { }
}