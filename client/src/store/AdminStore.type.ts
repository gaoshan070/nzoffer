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
