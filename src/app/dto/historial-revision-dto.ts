import { LocalDateTime } from '@js-joda/core'; // Necesitarás una librería para manejar fechas, como js-joda
import EstadoNegocio from './estado-negocio';

export class HistorialRevision {
    private descripcion: string;
    private estadoNegocio: EstadoNegocio;
    private fecha: LocalDateTime;
    private codigoModerador: string[];

    constructor(
        descripcion: string = '',
        estadoNegocio: EstadoNegocio,
        fecha: LocalDateTime = LocalDateTime.now(), // Ajusta según tu necesidad
        codigoModerador: string[] = []
    ) {
        this.descripcion = descripcion;
        this.estadoNegocio = estadoNegocio;
        this.fecha = fecha;
        this.codigoModerador = codigoModerador;
    }
}
