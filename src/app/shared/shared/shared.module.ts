import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
<<<<<<< HEAD
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'


=======
import { MaterialModule } from '../MaterialModule/material.module';
>>>>>>> 032005f751da86e2e876d2fecf57dd79e05eadc9

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
    
=======
    MaterialModule
>>>>>>> 032005f751da86e2e876d2fecf57dd79e05eadc9
  ],
  exports: [
    NavbarComponent,
<<<<<<< HEAD
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
=======
    MaterialModule
>>>>>>> 032005f751da86e2e876d2fecf57dd79e05eadc9
  ]
})
export class SharedModule { }
