import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaImagenesComponent } from './components/routes/tabla-imagenes/tabla-imagenes.component';


const routes: Routes = [
{path: '',pathMatch:'full', redirectTo:'tabla-imagenes'},
{path:'tabla-imagenes', component:TablaImagenesComponent},
{path:'tabla-imagenes/:fecha', component:TablaImagenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
