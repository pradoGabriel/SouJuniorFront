import { empresajrDTO } from "./empresa-jr.model";
import { estudanteCreationDTO } from "./estudante.model";
import { enderecoDTO} from "./endereco.model";
import { empreendedorCreationDTO } from "./empreendedor.model";

export interface usuarioCreatioDTO {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  imagemPerfil: string;
  estudante: estudanteCreationDTO;
  empresaJr: empresajrDTO;
  empreendedor: empreendedorCreationDTO
  endereco: enderecoDTO;
}
