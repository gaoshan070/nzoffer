import { IRegUser } from '../screens/StartRegisterScreen/subRoutes/components/utils';

type ObjectId = string;

interface IObjectId {
  _id: ObjectId;
}

interface ITimeStamp {
  createdAt: string;
  updatedAt: string;
}

export interface INZStudyArea extends ITimeStamp, IObjectId {
  nameCN: string;
}

export interface INZStudyAreaDetail extends ITimeStamp, IObjectId {
  nameCN: string;
  nameEN: string;
  nzStudyArea: ObjectId;
}

export interface ICNStudyArea extends ITimeStamp, IObjectId {
  nameCN: string;
  nzStudyArea: ObjectId;
}

export interface IUniversity extends ITimeStamp, IObjectId {
  nameCN: string;
  nameEN: string;
  logoURL: string;
  country: string;
}

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IProgramme extends ITimeStamp, IObjectId {
  nzStudyArea: ObjectId;
  nzStudyAreaDetail: ObjectId;

  nameEN: string;
  nameCN: string;
  university: string;
  location: string;

  applicationDeadline: string[];
  duration: string;
  startMonth: string[];

  tuitionFeeInNZD: number;
  requiredUniAverage: string;
  requiredIELTSScore: string;

  educationRequirement: string;

  programmeLevel: 'Master' | 'PGD' | 'GD' | 'Bachelor' | '大专有经验';

  difficulty: number;

  isInstituteCourse: boolean;

  requiredDocumentsName: string[];
}

export interface ILanguageProgramme extends ITimeStamp, IObjectId {
  nameEN: string;
  nameCN: string;
  university: string;
  startMonth: number[];
  tuitionFeeInNZD: number;
  lengthInWeeks: number;
  requiredIELTSScore: string;
  programmeLevel: 'Master' | 'PGD' | 'GD' | 'Bachelor' | '大专有经验';
  isInstituteCourse: boolean;
}

export interface IHighSchool extends ITimeStamp, IObjectId {
  programmeLevel: string;
  requiredAge: number;
  requiredIELTSScore: string;
  name: string;
  programmeDescription: string;
  location: string;
  entryDates: string[];
  tuitionFeeInNZD: number;
  durationInMonths: number[];
  gaoKaoScoreLevel: string;
}

export interface IPartner extends IRegUser, ITimeStamp, IObjectId {
  phone: string;
  email: string;
  password: string;
  isPartner: boolean;
  shouldSendPartnerEmail: boolean;
}

export interface IAdmin extends IPartner {
  isAdmin: boolean;
}
