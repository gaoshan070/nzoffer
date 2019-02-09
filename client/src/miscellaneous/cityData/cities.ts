/* tslint:disable */
import { citiesData } from './citiesData';

interface ICityData {
  province: string;
  name: string;
  id: string;
}

interface ICitiesData {
  [provinceId: string]: ICityData[];
}

export const cities = citiesData as ICitiesData;
