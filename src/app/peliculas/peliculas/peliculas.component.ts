import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculaImpl } from '../models/pelicula-impl';
import { PeliculaService } from '../service/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];
  peliculaVerDatos: Pelicula = new PeliculaImpl("", "", "", "", [], []);

  constructor(private peliculaService: PeliculaService,
              ) { }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe((response) => this.peliculas =
    this.peliculaService.extraerPeliculas(response));
  }

  verDatos(pelicula: Pelicula): void {
    this.peliculaVerDatos = pelicula;
  }

  onPeliculaEliminar(pelicula: Pelicula): void {
    console.log(`He eliminado a la película ${pelicula.titulo}`);  
    this.peliculas = this.peliculas.filter(p => pelicula !== p)
  }

}
