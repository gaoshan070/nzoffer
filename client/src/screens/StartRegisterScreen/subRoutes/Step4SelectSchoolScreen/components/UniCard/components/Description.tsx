import React from 'react';
import { DescItem } from './DescItem';

export const Description: React.FC<{
  duration: string;
  startMonth: number[];
  tuitionFeeInNZD: number;
  difficulty: number;
  requiredIELTSScore: string;
  location: string;
}> = ({
  duration,
  startMonth,
  tuitionFeeInNZD,
  difficulty,
  requiredIELTSScore,
  location,
}) => (
  <>
    <DescItem title="课程长度" text={duration} />
    <DescItem title="开学时间" text={startMonth.toString()} />
    <DescItem title="学费" text={`NZ $${tuitionFeeInNZD}`} />
    <DescItem title="学业难度" text={difficulty} />
    <DescItem title="雅思要求" text={requiredIELTSScore} />
    <DescItem title="城市" text={location} />
  </>
);
