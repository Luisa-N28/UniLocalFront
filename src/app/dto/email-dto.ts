export class EmailDTO {
    constructor(
        public asunto: string = '',
        public cuerpo: string = '',
        public destinario: string = ''

    ) { }
}