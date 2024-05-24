import EstadoNegocio from "./estado-negocio";
import { HistorialRevision } from "./historial-revision-dto";
import { Horario } from "./horario";
import { TipoNegocio } from "./tipo-negocio";
import { Ubicacion } from "./ubicacion";


export class ActualizarNegocioDTO {
    constructor(
        public codigo: string = '',
        public ubicacion: Ubicacion,
        public codigoUsuario: string = '',
        public nombre: string = '',
        public descripcion: string = '',
        public horarios: Horario[] = [],
        public imagenes: string[] = [],
        public tipoNegocio: TipoNegocio,
        public telefonos: string[],
        public estadoNegocio: EstadoNegocio,
        public historialRevision: HistorialRevision

    ) { }
}