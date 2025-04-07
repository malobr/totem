import { DBPatient } from "@/db/tables/patient";
import { patients } from "@/db";
import { v4 as uuidv4 } from "uuid";

export default function usePatient() {
  const createPatient = async () => {
    const newPatient: DBPatient = {
      id: uuidv4(),
      ref: "string",
      name: "string",
      email: "string",
      phone: "string",
      birthday: "string",
      difficulty: 1,
      formResults: [
        {
          ref: "string",
          form_title: "string",
          value: "string",
        },
      ],
    };

    await patients.add(newPatient);
  };

  const getPatients = async () => {
    const allPatient = await patients.toArray();

    return allPatient;
  };

  const getLastPatient = async () => {
    const patients = await getPatients();

    return patients[0];
  };

  const getPatientbyId = async (id: string) => {
    const allPatient = await patients.get(id);

    return allPatient;
  };

  return { createPatient, getPatients, getLastPatient, getPatientbyId };
}
