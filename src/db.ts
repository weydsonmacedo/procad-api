import { CivilStatus, FormularyStatus, FormularyType, UserDocumentType } from "./types/enums";

// database interface models
export interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface DBCountry extends Base {
  name: string;
  nationality: string;
}

export interface DBUser extends Base {
  academicDegreeId: string;
  birthdate: Date | null;
  careerId: string;
  civilStatus: CivilStatus;
  email: string;
  firstName: string;
  lastName: string;  
  nationalityId: string;
  naturalidade: string | null;
  password: string;  
  siape: string;
  workload: number | null;
}

export interface DBCareer extends Base {
  name: string;
}
export interface DBRole extends Base {
  name: string;
}
export interface DBLevel extends Base {
  name: string;
}
export interface DBAcademicDegree extends Base {
  name: string;
}

export interface DBUserDocument extends Base {
  type: UserDocumentType;
  issuer: string;
  value: string;
  userId: string;
}

export interface DBField extends Base {
  campo: string;
  observacao: string | null;
}
export interface DBActivity extends Base {
  atividade: string;
  fieldId: string;
  pontos: number;
  peso: number;
  label: string;
}

export interface DBFormulary extends Base {
  userId: string;
  type: FormularyType;
  comission: string;
  from: Date;
  to: Date;
  status: FormularyStatus;
  roleId: string;
  levelId: string;
  classId: string;
}

export interface DBFormularyAnswer extends Base {
  formularyId: string;
  fieldId: string;
  activityId: string;
  answer: string;
}

export interface DBFile extends Base {
  formularyAnswerId: string;
  filename: string;
  content: string;
}
