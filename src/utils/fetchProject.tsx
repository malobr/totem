import { ProjectType } from "@/context/configurationContext/types";

const fetchProjectByRef = async (ref: string): Promise<ProjectType> => {
  // Simulação de requisição para buscar dados do projeto
  return new Promise((resolve, reject) => {
    const projects = [
      {
        ref: "1",
        title: "Titulo",
        name: "Projeto Exemplo Da 1",
        description: "Descrição do z.",
        theme: "x",
        logoUrl: "x",
        pattern: "1",
      },
      {
        ref: "2",
        title: "Titulo",
        name: "Projeto Exemplo Da 2",
        description: "Descrição do y.",
        theme: "x",
        logoUrl: "x",
        pattern: "1",
      },
      {
        ref: "3",
        title: "Titulo",
        name: "Projeto Exemplo Da 3",
        description: "Descrição do x.",
        theme: "x",
        logoUrl: "x",
        pattern: "1",
      },
    ];

    const project = projects.find((e) => e.ref === ref);

    setTimeout(() => {
      if (project) {
        resolve(project);
      } else {
        reject(new Error(`Projeto com ID ${ref} não encontrado.`));
      }
    }, 1000);
  });
};

export default fetchProjectByRef;
