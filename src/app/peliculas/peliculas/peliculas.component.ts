import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
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
  todasPeliculas: Pelicula[] = [];
  peliculaVerDatos: Pelicula = new PeliculaImpl("", "", "", "", [], []);
  numPaginas: number = 0;

  constructor(private peliculaService: PeliculaService,
              private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe((response) => this.peliculas =
    this.peliculaService.extraerPeliculas(response));
    this.getTodasPeliculas();
  }

  verDatos(pelicula: Pelicula): void {
    this.peliculaVerDatos = pelicula;
  }

  onPeliculaEliminar(pelicula: Pelicula): void {
    console.log(`He eliminado a la película ${pelicula.titulo}`);  
    this.peliculas = this.peliculas.filter(p => pelicula !== p)
  }

  getTodasPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.peliculaService.getPeliculasPagina(index).subscribe(response => {
          this.todasPeliculas.push(...this.peliculaService.extraerPeliculas(response));
        });
      }
    });
  }

}
