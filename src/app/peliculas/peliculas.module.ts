import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaItemComponent } from './pelicula-item/pelicula-item.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { PeliculaComponent } from './peliculas/pelicula/pelicula.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaItemComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
  ],
  providers: [AuxiliarService]
})
export class PeliculasModule { }
