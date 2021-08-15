import { TwoDimensionalNumber } from '../../../types/Measurements';

export enum HeadOptions {
  Close = 0,
  Minimize = 1 << 0,
  Maximize = 1 << 1,
  Menu = 1 << 2,
}

export interface HeadProps {
  size: TwoDimensionalNumber;
  options: HeadOptions;
}
