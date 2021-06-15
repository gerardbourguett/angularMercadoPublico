import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listadoLicitaciones:any = [];

  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get("http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?ticket=54296D76-CAFF-4964-886F-35E9223D30B4&estado=activas").subscribe(respuesta => {
      this.listadoLicitaciones = respuesta;
    })
  }
}
