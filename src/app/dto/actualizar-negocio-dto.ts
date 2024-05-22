import EstadoNegocio from "./estado-negocio";
import { HistorialRevision } from "./historial-revision-dto";
import { Horario } from "./horario";
import { TipoNegocio } from "./tipo-negocio";

export class ActualizarNegocioDTO {
    constructor(
        public codigo: string = '',
        public ubicacion: Ubicacion | null = null,
        public codigoUsuario: string = '',
        public nombre: string = '',
        public descripcion: string = '',
        public horarios: Horario[] = [],
        public imagenes: string[] = [],
        public tipoNegocio: TipoNegocio | null = null,
        public telefonos: string[] = [],
        public estadoNegocio: EstadoNegocio | null = null,
        public historialRevision: HistorialRevision[] | null = null

    ) { }
}