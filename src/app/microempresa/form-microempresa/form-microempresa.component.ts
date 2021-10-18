import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioCreatioDTO } from 'src/app/model/usuario.model';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';

import { empreendedorCreationDTO } from '../../model/empreendedor.model';

@Component({
  selector: 'app-form-microempresa',
  templateUrl: './form-microempresa.component.html',
  styleUrls: ['./form-microempresa.component.scss']
})
export class FormMicroempresaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  usuario: usuarioCreatioDTO;

  @ViewChild(AutocompleteRamoAtuacaoComponent) ramo;

  @Output()
  onSaveChanges: EventEmitter<empreendedorCreationDTO> = new EventEmitter<empreendedorCreationDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      email: '',
      senha: '',
      telefone: '',
      imagemPerfil: '',
      empreendedor: new FormGroup( {
        cnpj: new FormControl(''),
        descricao: new FormControl(''),
        dataCriacao: new FormControl(''),
        razaoSocial: new FormControl(''),
        nomeFantasia: new FormControl(''),
        ramoAtuacaoId: new FormControl(),
      }),
      endereco: new FormGroup( {
        cep: new FormControl(''),
        estado: new FormControl(''),
        bairro: new FormControl(''),
        cidade: new FormControl(''),
        complemento: new FormControl(''),
        logradouro: new FormControl(''),
        numero: new FormControl('')
      }),

    });

    if (this.usuario !== undefined){
      this.form.patchValue(this.usuario);
    }

  }

  onImageSelected(image){
    this.form.get('imagemPerfil').setValue(image);
  }

  saveChanges(){
    this.form.get('empreendedor.ramoAtuacaoId').setValue(this.ramo.ramoSelecionado.id);
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if (field.hasError('required')){
      return 'The name field is required';
    }

    if (field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    if (field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
