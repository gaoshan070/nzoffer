import React from 'react';
import { DescItem } from './DescItem';
import starSVG from '../../../../../../../assets/star.svg';
import { Box, Image } from '../../../../../../../styles/rebase/components';

const getStar = (num: number) => {
  let numFrom = num;
  const content = [];
  while (numFrom > 0) {
    content.push(
      <Image key={numFrom} height="16px" width="16px" src={starSVG} />,
    );
    numFrom = numFrom - 1;
  }

  return (
    <Box alignItems="center" maxHeight="16px">
      {content}
    </Box>
  );
};

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
}) => {
  return (
    <>
      <DescItem
        title="开学时间"
        text={startMonth
          .map((s, i) => `${i !== 0 ? ' ' : ''}${s}月`)
          .toString()}
      />
      <DescItem title="课程长度" text={`${duration} Months`} />
      <DescItem title="学费" text={`${tuitionFeeInNZD} NZD`} />
      <DescItem title="学业难度" text={getStar(difficulty)} />
      <DescItem title="雅思要求" text={requiredIELTSScore} />
      <DescItem title="城市" text={location} my={'6px'} />
    </>
  );
};
