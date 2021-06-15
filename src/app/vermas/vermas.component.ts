import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css']
})
export class VermasComponent implements OnInit {

  constructor(private route:ActivatedRoute, private RestService: RestService) { }

  public respuesta:any = [];
  public cantidad:any;
  load: boolean | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap

      this.cargarData(params.variable)
    })
  }

  cargarData(id:string){
    this.RestService.get(`http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?ticket=54296D76-CAFF-4964-886F-35E9223D30B4&Codigo=${id}`).subscribe(respuesta => {
      this.respuesta = respuesta;
      this.load = true;
      this.cantidad = respuesta;
    })
  }
}
