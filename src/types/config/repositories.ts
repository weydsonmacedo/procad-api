import {
  AcademicDegreeRepository,
  ActivityRepository,
  CareerRepository,
  CountryRepository,
  FieldRepository,
  FileRepository,
  FormularyAnswerRepository,
  FormularyRepository,
  LevelRepository,
  RoleRepository,
  UserDocumentRepository,
  UserRepository,
} from "../../repositories";

export interface Repositories {
  AcademicDegreeRepository: AcademicDegreeRepository;
  ActivityRepository: ActivityRepository;
  CareerRepository: CareerRepository;
  CountryRepository: CountryRepository;
  FieldRepository: FieldRepository;
  FileRepository: FileRepository;
  FormularyAnswerRepository: FormularyAnswerRepository;
  FormularyRepository: FormularyRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserDocumentRepository: UserDocumentRepository;
  UserRepository: UserRepository;
}
