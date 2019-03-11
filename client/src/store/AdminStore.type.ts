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

export interface INZProgramme extends ITimeStamp, IObjectId {
  nzStudyArea: ObjectId;
  nzStudyAreaDetail: ObjectId;

  nameEN: string;
  nameCN: string;
  university: string;
  location: string;

  applicationDeadline: string[];
  duration: string;
  startMonth: Month[];

  tuitionFeeInNZD: number;
  requiredUniAverage: string;
  requiredEngTestScore: string;

  requiredChinaDegree: string;
  requiredOverseaDegree: string;

  educationRequirement: '本科毕业' | '相关专业' | '延展专业';
  extendedRequiredCNStudyArea: ObjectId;
}
