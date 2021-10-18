import { ramoAtuacaoDTO } from "./ramoAtuacao.model";

export interface empreendedorCreationDTO {
  cnpj: string;
  descricao: string;
  dataCriacao: Date;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacaoId: number;
}

export interface empreendedorDTO {
  cnpj: string;
  descricao: string;
  dataCriacao: Date;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacaoId: number;
}
