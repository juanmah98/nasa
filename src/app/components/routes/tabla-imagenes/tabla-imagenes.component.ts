import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; 


import { Router, ActivatedRoute } from '@angular/router';
import { ImagenesService } from 'src/app/services/imagenes.service.service';
@Component({
  selector: 'app-tabla-imagenes',
  templateUrl: './tabla-imagenes.component.html',
  styleUrls: ['./tabla-imagenes.component.scss']
})
export class TablaImagenesComponent implements OnInit {

  formularioFecha!:FormGroup;
  imagenes! : any[];
  fecha:any;
  form:any;
  constructor(
    private activeRoute:ActivatedRoute, 
    private _imagenes:ImagenesService,
    public formulario:FormBuilder,
    private ruteador:Router) { 
    this.fecha=this.activeRoute.snapshot.paramMap.get('fecha'); // recibimos el dato enviado por url
    
    /*if(this.fecha){
      this.listarImg();
    }else{
      this.listarImg_Fecha();
    }*/

    this.formularioFecha=this.formulario.group(

          {
            fecha:[null],
          }
          );

  }

  ngOnInit(): void {
   // this.activeRoute.queryParams.subscribe(params => {
    this.fecha = this.activeRoute.snapshot.paramMap.get('fecha');
    //console.log("+++ "+this.fecha);
 // });
   if(this.fecha==null){
     this.listarImg();
   }else{
       this.listarImg_Fecha();
     }
  }

  listarImg(){
    this._imagenes.ObtenerImagenes().subscribe(respuesta=>{
      //console.log(respuesta);
      this.imagenes=respuesta.photos;
      console.log(this.imagenes);
    }, error =>{
      console.log(error)
    });
  }

  listarImg_Fecha(){
    this._imagenes.ObtenerImagenes_fecha(this.fecha).subscribe(respuesta=>{
      //console.log(respuesta);
      this.imagenes=respuesta.photos;
     // console.log(this.imagenes);
    }, error =>{
      console.log(error)
    });
  }


enviarFecha():any{
  //console.log(this.formularioFecha.controls['fecha'].value);
   this.ruteador.navigate(['/tabla-imagenes', this.formularioFecha.controls['fecha'].value]);//, { queryParams: { fecha: this.formularioFecha.controls['fecha'].value } });
   
}
    
}
