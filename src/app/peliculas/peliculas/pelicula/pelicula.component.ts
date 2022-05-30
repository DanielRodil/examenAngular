import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaImpl } from '../../models/pelicula-impl';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula = new PeliculaImpl('', '', '', '', [], []);
  @Output() peliculaEliminar = new EventEmitter<Pelicula>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.peliculaEliminar.emit(this.pelicula)
  }

}
