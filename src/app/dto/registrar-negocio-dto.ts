import { Horario } from "./horario";
import { TipoNegocio } from "./tipo-negocio";

export class RegistrarNegocioDTO {
    constructor(
        public ubicacion: Ubicacion | null,
        public codigoUsuario: string,
        public nombre: string,
        public descripcion: string,
        public horarios: Horario[],
        public imagenes: string[],
        public tipoNegocio: TipoNegocio | null,
        public telefonos: string[]

    ) { }
}