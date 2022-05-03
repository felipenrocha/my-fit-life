import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';
import { DialogContentExampleDialog, PainelComponent } from './painel/painel.component';
import {MatTableModule} from '@angular/material/table';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TreinoComponent } from './treino/treino.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { PainelRealizadoComponent } from './painel-realizado/painel-realizado.component';



registerLocaleData(localePT);
@NgModule({
  declarations: [
    DialogContentExampleDialog,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PainelComponent,
    TreinoComponent,
    PainelRealizadoComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule, 
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
