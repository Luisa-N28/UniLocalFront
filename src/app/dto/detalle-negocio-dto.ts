import { HistorialRevision } from "./historial-revision-dto";
import { Horario } from "./horario";
import { TipoNegocio } from "./tipo-negocio";

export class DetalleNegocioDTO {
    constructor(
        public codigoNegocio: string = '',
        public codigoCliente: string = '',
        public ubicacion: Ubicacion | null = null,
        public nombre: string = '',
        public descripcion: string = '',
        public horarios: Horario[] = [],
        public imagenes: string[] = [],
        public tipoNegocio: TipoNegocio | null = null,
        public historialRevisiones: HistorialRevision[] | null = null,
        public telefonos: string[] = [],
        public puntuacion: number = 0

    ) { }
}