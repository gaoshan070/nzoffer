import { provincesData } from './provincesData';

export interface IProvince {
  name: string;
  id: string;
}

export const provinces = provincesData as IProvince[];
