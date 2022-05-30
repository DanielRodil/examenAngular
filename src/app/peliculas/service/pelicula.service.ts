import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../models/pelicula';
import { PeliculaImpl } from '../models/pelicula-impl';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}films`;

  constructor(private http: HttpClient,
              ) { }

  getPeliculas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPeliculas(respuestaApi: any): Pelicula[] {
    const peliculas: Pelicula[] = [];
    respuestaApi.results.forEach((p: any) => {
      peliculas.push(this.mapearPelicula(p));
    });
    return peliculas;
  }

  mapearPelicula(peliculaApi: any): PeliculaImpl {
    return new PeliculaImpl(
      peliculaApi.title,
      peliculaApi.director,
      peliculaApi.producer,
      peliculaApi.release_date,
      peliculaApi.characters,
      peliculaApi.planets);
  }

  create(pelicula: Pelicula): void {
    console.log(`Se ha creado la pelicula: ${JSON.stringify(pelicula)}`);
  }


}
