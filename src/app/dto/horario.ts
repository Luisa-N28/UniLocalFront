import { DayOfWeek } from "./day-of-week";

export class Horario {
    horaInicio: number;
    horaFin: number;
    dayOfWeek: DayOfWeek;

    constructor(horaInicio:number, horaFin: number, dayOfWeek: DayOfWeek) { ;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
    this.dayOfWeek= dayOfWeek;
    }
}