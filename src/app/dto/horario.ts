export class Horario {
    horaInicio: number;
    horaFin: number;
    dia: DayOfWeek;

    constructor() { ;
    this.horaInicio = 0
    this.horaFin = 0;
    this.dia = { ordinal: 1, name: "LUNES" };
    }
}