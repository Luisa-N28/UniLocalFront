import { LocalDateTime } from '@js-joda/core';

export class Bloqueo {
    fechaInicio: LocalDateTime | null = null;
    fechaFinal: LocalDateTime | null = null;
    codigoModerador: string = '';
    motivo: string = '';

    constructor(
        fechaInicio: LocalDateTime | null = null,
        fechaFinal: LocalDateTime | null = null,
        codigoModerador: string = '',
        motivo: string = ''
    ) {
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.codigoModerador = codigoModerador;
        this.motivo = motivo;
    }
}
