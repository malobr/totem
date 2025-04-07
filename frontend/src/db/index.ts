import Dexie from "dexie";
import { DBPatient } from "./tables/patient";
import { DBProject } from "./tables/project";
import formPagesData from "@/utils/FormPagesData";

// Definição da interface do paciente

// Função para criar e configurar o banco de dados
const createDatabase = () => {
    const db = new Dexie("DigitalPrototypeDB");
    const formDataKeys = formPagesData.map((e) => e.title).join(', ')

    // Definição das tabelas e índices
    db.version(1).stores({
        patients: "id, ref, name, email, phone, birthday, difficulty, "+ formDataKeys,
        project: "id, ref, name, description, logo, background, backgroundImage"
    });

    // Retorna o banco e a tabela já configurada
    return { db, patients: db.table<DBPatient>("patients"), project: db.table<DBProject>("project") };
};

// Exporta a instância do banco
export const { db, patients, project } = createDatabase();