import { Component } from '@angular/core';
import { PartidosService } from '../partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {
  verTabla: boolean= false;
  partidosLista!: Array<{
    _id: number,
    local: string,
    visitante: string,
    gol_local: number,
    gol_visitante: number,
    fecha: string,
  }>
  constructor(private http: PartidosService) { }
  mostrarPartidos(){
    this.http.getPartidos().subscribe({
      next: (data: any) => {
        console.log(data);
        this.partidosLista = JSON.parse(JSON.stringify(data))
        this.verTabla = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
