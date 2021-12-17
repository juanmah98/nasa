import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // conexion con la API
import { Observable } from 'rxjs'; // observando todo en el entrono html
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService{
  API: string='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

  constructor(private _http:HttpClient) { }

  // Listamos los empleados 
  ObtenerImagenes():Observable<any>{
    return this._http.get(environment.apiUrl+"?api_key=DEMO_KEY&earth_date=2015-6-3");
  }

  ObtenerImagenes_fecha(fecha:any):Observable<any>{ 
    return this._http.get(environment.apiUrl+"?api_key=DEMO_KEY&earth_date="+fecha);
  }
}
