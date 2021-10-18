import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioCreatioDTO } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-estudante.component.html',
  styleUrls: ['./form-estudante.component.scss']
})
export class FormAlunoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  periodo: { key: number; value: string;}[]

  @Input()
  estudante: usuarioCreatioDTO;

  @Output()
  onSaveChanges: EventEmitter<usuarioCreatioDTO> = new EventEmitter<usuarioCreatioDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      email: '',
      senha: '',
      telefone: '',
      imagemPerfil: '',
      estudante: new FormGroup( {
        cpf: new FormControl(''),
        instituicao: new FormControl(''),
        curso: new FormControl(''),
        periodo: new FormControl()
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

    if (this.estudante !== undefined){
      this.form.patchValue(this.estudante);
    }


  }

  onImageSelected(image){
    this.form.get('imagemPerfil').setValue(image);
  }

  saveChanges(){
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
