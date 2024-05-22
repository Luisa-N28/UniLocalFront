import { LocalDateTime } from "@js-joda/core";

export class RegistrarBloqueoDTO {
    constructor(
        public fechaInicio: LocalDateTime | null,
        public fechaFinal: LocalDateTime | null,
        public motivo: string,
        public codigoComentario: string,
        public codigoCliente: string,
        public codigoModerador: string,
        public codigoReporte: string

    ) { }
}