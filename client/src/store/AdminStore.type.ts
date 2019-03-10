interface IObjectId {
  _id: string;
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
  nzStudyArea: string;
}

export interface ICNStudyArea extends ITimeStamp, IObjectId {
  nameCN: string;
  nzStudyArea: string;
}

export interface IUniversity extends ITimeStamp, IObjectId {
  nameCN: string;
  nameEN: string;
  logoURL: string;
  country: string;
}
