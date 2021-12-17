import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { TablaImagenesComponent } from './routes/tabla-imagenes/tabla-imagenes.component';
import { ImagenesService } from '../services/imagenes.service.service';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    TablaImagenesComponent,
    ImagenesService

  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
