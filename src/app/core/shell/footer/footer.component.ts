import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  urlProgramacion: string = environment.urlProgramacion;
  urlgrains: string = environment.urlgrains;
  urlRecursos: string = environment.urlRecursos;
  imagenCasco: string = environment.imagenCasco;
  imagenDarth: string = environment.imagenDarth;
  imagenStar: string = environment.imagenStar;

  constructor() { }

  ngOnInit(): void {
  }

}
