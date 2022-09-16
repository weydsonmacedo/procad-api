import { Comission, FormularyAnswer, FormularyType } from "..";

export interface File {  
  id: string | undefined;
  filename: string;
  content: string;
}
export interface FormularyInput {
  type: FormularyType;
  period: {
    from: Date;
    to: Date;
  };
  levelId: string;
  roleId: string;
  classId: string;
  comission: Comission[];
}

export interface FormularyAnswerInput {
  id: string | null;
  formularyId: string;
  fieldId: string;
  activityId: string;
  files: File[];
  answers: FormularyAnswer[];
}
