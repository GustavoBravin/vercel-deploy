// Data de término do semestre (horário de Brasília). Ajuste conforme o calendário acadêmico.
export const FIM_DO_SEMESTRE = "2026-12-18T23:59:59-03:00";

export type Trabalho = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
};

export type Semestre = {
  numero: number;
  periodo: string;
  foto: string;
  resumo: string;
  trabalhos: Trabalho[];
};

// Edite os trabalhos e troque as imagens em /public/timeline pelas suas fotos.
export const SEMESTRES: Semestre[] = [
  {
    numero: 1,
    periodo: "2025/1",
    foto: "/timeline/semestre-1.svg",
    resumo: "Primeiros passos em lógica de programação e fundamentos da computação.",
    trabalhos: [
      {
        titulo: "Algoritmos em pseudocódigo e Python",
        descricao: "Exercícios de lógica, estruturas condicionais e de repetição.",
        tecnologias: ["Python", "Portugol"],
      },
      {
        titulo: "Página pessoal",
        descricao: "Primeiro site estático com HTML e CSS.",
        tecnologias: ["HTML", "CSS"],
      },
    ],
  },
  {
    numero: 2,
    periodo: "2025/2",
    foto: "/timeline/semestre-2.svg",
    resumo: "Programação orientada a objetos e modelagem de banco de dados.",
    trabalhos: [
      {
        titulo: "Sistema de cadastro em Java",
        descricao: "Aplicação de console aplicando classes, herança e encapsulamento.",
        tecnologias: ["Java", "POO"],
      },
      {
        titulo: "Modelagem de banco de dados",
        descricao: "Modelo entidade-relacionamento e scripts SQL de uma loja.",
        tecnologias: ["MySQL", "SQL"],
      },
    ],
  },
  {
    numero: 3,
    periodo: "2026/1",
    foto: "/timeline/semestre-3.svg",
    resumo: "Desenvolvimento web com front-end interativo e back-end com API.",
    trabalhos: [
      {
        titulo: "API REST",
        descricao: "API com rotas de CRUD integrada a um banco de dados.",
        tecnologias: ["Node.js", "Express"],
      },
      {
        titulo: "Front-end com JavaScript",
        descricao: "Interface que consome a API e manipula o DOM.",
        tecnologias: ["JavaScript", "HTML", "CSS"],
      },
    ],
  },
  {
    numero: 4,
    periodo: "2026/2",
    foto: "/timeline/semestre-4.svg",
    resumo: "Versionamento, frameworks modernos e publicação na nuvem.",
    trabalhos: [
      {
        titulo: "Meu Projeto Simples",
        descricao: "Site com galeria e contador de cliques para praticar Git e GitHub.",
        tecnologias: ["Git", "GitHub", "HTML", "JavaScript"],
      },
      {
        titulo: "Relógio do semestre (este site)",
        descricao: "Contagem regressiva em Next.js publicada na Vercel.",
        tecnologias: ["Next.js", "React", "Vercel"],
      },
    ],
  },
];
