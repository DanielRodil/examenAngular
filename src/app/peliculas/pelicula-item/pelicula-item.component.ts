import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculaImpl } from '../models/pelicula-impl';

@Component({
  selector: 'app-pelicula-item',
  templateUrl: './pelicula-item.component.html',
  styleUrls: ['./pelicula-item.component.css']
})
export class PeliculaItemComponent implements OnInit {

  @Input() pelicula: Pelicula = new PeliculaImpl("", "", "", "", [], []);
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  constructor() { }

  ngOnInit(): void {
  }

}
