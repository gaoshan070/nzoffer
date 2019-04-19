import { engTestScores } from '../shared/sharedData';

function ieltsWrapper(ieltsScoreToMatch: string) {
  // Each array in engTestScores, they all have the same
  // amount of data. Which means, for example:
  // PTE[0] === '< 35', and IELTS[0] === '4.5'
  // So, PTE '< 35' === IELTS '4.5'
  return (engTestName: string, engTestScore: string) => {
    // @ts-ignore
    const engScores = engTestScores[engTestName];
    if (!engScores) return false;
    const index = engScores.findIndex((i: string) => i === engTestScore);
    return (
      index === engTestScores.IELTS.findIndex(i => i === ieltsScoreToMatch)
    );
  };
}

export const isIELTS = {
  s45: ieltsWrapper('4.5'),
  s50: ieltsWrapper('5.0'),
  s55: ieltsWrapper('5.5'),
  s60: ieltsWrapper('6.0'),
  s65: ieltsWrapper('6.5'),
  s70: ieltsWrapper('7.0'),
  s75: ieltsWrapper('7.5'),
};

const getIELTSScore = (engTestName: string, engTestScore: string) => {
  // @ts-ignore
  const engScores = engTestScores[engTestName];
  if (!engScores) return '';
  const index = engScores.findIndex((i: string) => i === engTestScore);
  const result = engTestScores.IELTS[index];
  return result ? result : '';
};

export const isInstituteCourse = ({
  chinaDegree,
  gaoKaoScoreLevel,
  engTestName,
  engTestScore,
}: {
  chinaDegree: string;
  gaoKaoScoreLevel: string;
  engTestName: string;
  engTestScore: string;
}) =>
  chinaDegree === '高三毕业' &&
  ['无成绩', '一本线以下'].includes(gaoKaoScoreLevel) &&
  (isIELTS.s45(engTestName, engTestScore) ||
    isIELTS.s50(engTestName, engTestScore));
