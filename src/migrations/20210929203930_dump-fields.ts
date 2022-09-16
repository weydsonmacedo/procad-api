import * as Knex from "knex";
import { v4 as uuid } from "uuid";

const fields = [
  {
    id: uuid(),
    text: "CAMPO I – ATIVIDADES DE ENSINO, ORIENTAÇÃO E PARTICIPAÇÃO EM BANCAS EXAMINADORAS OBS.: Não será considerada a acumulação de pontuação de orientação e de membro de Banca Examinadora/Coordenação para fins de progressão/promoção",
  },
  {
    id: uuid(),
    text: "CAMPO II - ATIVIDADES DE PESQUISA, PRODUÇÃO ACADÊMICA, CRIAÇÃO E INOVAÇÃO OBS.: Não será considerada a acumulação de pontuação de coordenação e de membro de equipe executora para fins de progressão/promoção e nenhuma produção poderá ser bi-pontuada",
  },
  {
    id: uuid(),
    text: "CAMPO III – ATIVIDADES DE EXTENSÃO Consideradas conforme inciso III da Portaria  no 982/2013 do MEC, Art. 2º § 3º do Regimento Geral da UFBA, Art. 6º da Resolução CAPEX  no   02/2012. OBS.: Não será considerada a acumulação de pontuação de coordenação e de membro de equipe executora para fins de progressão/promoção e nenhuma produção poderá ser bi-pontuada",
  },
  {
    id: uuid(),
    text: "CAMPO IV - RECEBIMENTO DE COMENDAS E PREMIAÇÕES ADVINDAS DO EXERCÍCIO DE ATIVIDADES ACADÊMICAS",
  },
  {
    id: uuid(),
    text: "CAMPO V - PARTICIPAÇÃO EM ATIVIDADES EDITORIAIS E/OU DE ARBITRAGEM DE PRODUÇÃO INTELECTUAL E/OU ARTÍSTICA",
  },
  {
    id: uuid(),
    text: "CAMPO VI- ATIVIDADES DE ADMINISTRAÇÃO/ REPRESENTAÇÃO/ ACADÊMICAS Obs.:  Não  será  considerada  a  acumulação  de  pontuação  no  caso  de  membro  e presidente da mesma Comissão.",
  },
  {
    id: uuid(),
    text: "CAMPO VII - ATIVIDADES DE CAPACITAÇÃO PROFISSIONAL Obs. vedada a acumulação de pontos para afastamento com os da obtenção do correspondente título)",
  },
  {
    id: uuid(),
    text: "CAMPO VIII - ATIVIDADES PROFISSIONAIS",
  },
  {
    id: uuid(),
    text: "CAMPO IX - AVALIAÇÃO DOCENTE PELOS DISCENTES",
  },
];

export async function up(knex: Knex) {
  await knex("fields").select().delete();
}

export async function down(knex: Knex) {
  await knex("fields").insert(fields);
}
