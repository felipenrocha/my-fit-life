import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PainelRealizadoComponent } from './painel-realizado/painel-realizado.component';
import { PainelComponent } from './painel/painel.component';
import { RegisterComponent } from './register/register.component';
import { TreinoComponent } from './treino/treino.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'painel', component: PainelComponent },
  { path: 'treino', component: TreinoComponent },
  { path: 'painel/completo', component: PainelRealizadoComponent },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
