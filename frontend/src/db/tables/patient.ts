export interface DBPatient {
    ref: string;
    id: string;
    name: string;
    email: string;
    phone: string;
    birthday: string;
    difficulty: number;
    formResults: [
        {
            ref: string
            form_title: string,
            value: string
        }
    ]
}