import { TipoNegocio } from "./tipo-negocio";

export class BuscarNegocioDTO {
    constructor(
        public nombre: string = '',
        public tipoNegocio: TipoNegocio | null = null

    ) { }
}