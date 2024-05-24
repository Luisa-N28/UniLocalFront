import { Horario } from "./horario";
import { TipoNegocio } from "./tipo-negocio";
import { Ubicacion } from "./ubicacion";

export class RegistrarNegocioDTO {
    constructor(
        public ubicacion: Ubicacion= new Ubicacion(0,0),
        public codigoUsuario: string='',
        public nombre: string='',
        public descripcion: string='',
        public horarios: Horario[]=[],
        public imagenes: string[]=[],
        public tipoNegocio: TipoNegocio=TipoNegocio.BAR,
        public telefonos: string[]=[]

    ) { }
}