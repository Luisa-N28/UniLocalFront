import { EstadoReporte } from "./estado-reporte";

export class CambiarEstadoReporteDTO {
    constructor(
        public codigoReporte: string = '',
        public estadoReporte: EstadoReporte | null = null
    ) { }
}