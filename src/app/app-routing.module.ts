import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpresaJrComponent } from './empresajr/create-empresa-jr/create-empresa-jr.component';
import { CreateMicroempresaComponent } from './microempresa/create-microempresa/create-microempresa.component';
import { CreateAlunoComponent } from './aluno/create-aluno/create-aluno.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createEmpresaJr', component: CreateEmpresaJrComponent},
  {path: 'createMicroEmpresa', component: CreateMicroempresaComponent},
  {path: 'createAluno', component: CreateAlunoComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
