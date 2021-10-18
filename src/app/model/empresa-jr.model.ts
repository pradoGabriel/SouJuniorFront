import {ramoAtuacaoDTO} from './ramoAtuacao.model'

export interface empresajrCreationDTO {
  cnpj: string;
  descricao: string;
  dataCriacao: Date;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacaoId: number;
}

export interface empresajrDTO {
  cnpj: string;
  descricao: string;
  dataCriacao: Date;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacaoId: number;
}
