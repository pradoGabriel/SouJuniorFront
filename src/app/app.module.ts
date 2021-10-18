
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o'

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CreateEmpresaJrComponent } from './empresajr/create-empresa-jr/create-empresa-jr.component';
import { FormEmpresaJrComponent } from './empresajr/form-empresa-jr/form-empresa-jr.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateAlunoComponent } from './aluno/create-aluno/create-aluno.component';
import { FormAlunoComponent } from './aluno/form-estudante/form-estudante.component';
import { InputImgComponent} from './utilities/input-img/input-img.component';
import { CreateMicroempresaComponent } from './microempresa/create-microempresa/create-microempresa.component';
import { FormMicroempresaComponent } from './microempresa/form-microempresa/form-microempresa.component'
import {MatStepperModule} from '@angular/material/stepper';
import { AutocompleteRamoAtuacaoComponent } from './ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateEmpresaJrComponent,
    FormEmpresaJrComponent,
    HomeComponent,
    CreateAlunoComponent,
    FormAlunoComponent,
    InputImgComponent,
    CreateMicroempresaComponent,
    FormMicroempresaComponent,
    AutocompleteRamoAtuacaoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatStepperModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
