import { userService, feathersApp } from '../../../../utils/feathers';
import { getUserId } from '../../../../utils/token';
import Alert from 'react-s-alert';
import { ILocation } from '../../../../store/ChatScreenStore/ChatScreenStore.type';
import {
  IHighSchool,
  IProgramme,
  ILanguageProgramme,
} from '../../../../store/AdminStore.type';

export interface IRegUser {
  isSubmit: boolean;

  province: ILocation;
  city: {
    name: string;
    id: string;
    provinceId: string;
  };

  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;

  streetNum: string;
  streetName: string;

  email: string;

  chinaDegree: string;
  isCN211Uni: boolean;
  cn211UniName: string;
  cnNormalUniName: string;
  cnUniAverageScore: string;

  engTestName: string;
  engTestScore: string;

  nzStudyArea: string;
  nzStudyAreaDetail: string;
  cnStudyArea: string;

  cnHighSchoolName: string;

  gaoKaoScoreLevel: string;

  overseaUniNameEN: string;
  overseaStudyAreaNameEN: string;
  overseaUniAverageScore: string;

  isDegreeGetInChina: boolean;

  selected: {
    highschool: {
      info: IHighSchool;
      startDate: string;
    };
    programme: {
      info: IProgramme;
      startDate: string;
    };
    languageProgramme: {
      info: ILanguageProgramme;
      diyEngTest: boolean;
      startDate: string;
    };
  };
}

export function patchUser(
  userInfo: Partial<IRegUser>,
  skipCheck: boolean = false,
  callback?: Function,
) {
  const newUserInfo = { ...userInfo };

  if (!skipCheck) {
    const userKeys = Object.keys(userInfo);
    if (userKeys.length > 0) {
      userKeys.forEach(key => {
        // @ts-ignore
        if (newUserInfo[key] === '' || newUserInfo == null) {
          // @ts-ignore
          delete newUserInfo[key];
        }
      });
    }
    if (Object.keys(newUserInfo).length === 0) {
      Alert.error('请填写信息后再保存 ');
      return;
    }
  }

  return userService
    .patch(getUserId(), newUserInfo)
    .then(() => {
      Alert.success('保存成功');
      if (typeof callback === 'function') {
        setTimeout(() => {
          callback();
        }, 2000);
      }
    })
    .catch((e: { code: number; message: string }) => {
      if (e.code === 400) {
        Alert.error('还有些错误的信息，请订正完错误再试');
      } else {
        Alert.error(e.message);
      }
    });
}

export const isDegreeHighSchool = (chinaDegree: string) =>
  chinaDegree.startsWith('小') ||
  chinaDegree.startsWith('初') ||
  chinaDegree.startsWith('高');
