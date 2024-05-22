import { LocalDateTime } from "@js-joda/core";

export class ItemReporteDTO {
    constructor(
        public codigo: string,
        public horaInicio: LocalDateTime,
        public mensaje: string

    ) { }
}