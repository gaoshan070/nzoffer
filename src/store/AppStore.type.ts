export interface IStep {
  component: React.ComponentType<any>;
  position: 'left' | 'right';
  props: object;
}

export type ReactElementArray = React.ReactElement<
  any
>[];

export interface ILocation {
  name: string;
  id: string;
}

export interface ICity extends ILocation {
  province: string;
}
