import { Pelicula } from "./pelicula";

export class PeliculaImpl implements Pelicula {
    titulo: string = '';
    director: string = '';
    productor: string = '';
    fechaLanzamiento: string = '';
    personajes: any[] = [];
    planetas: any[] = [];

    constructor(title: any, director: any, producer: any, release_date: any, characters: any[], planets: any[]) {
        this.titulo = title;
        this.director = director;
        this.productor = producer;
        this.fechaLanzamiento = release_date;
        this.personajes = characters;
        this.planetas = planets;
    }

}
