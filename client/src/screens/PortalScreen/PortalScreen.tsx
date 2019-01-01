import React, { useState } from 'react';
import Box from '../../components/Box/Box';
import Input, {
  useField,
} from '../../components/Input';
import YesOrNo from '../../components/YesOrNo/YesOrNo';
import { RouteComponentProps } from 'react-router';
import RecentDegreeDropDown from './components/RecentDegree';
import ChinaUniListDropDown from './components/ChinaUniListDropDown';
import Screen from '../../components/Screen';

const InputsBox: React.FC<{
  label: string;
  height?: string;
}> = ({ label, height, children }) => {
  const childrenNum = React.Children.count(children);
  const defaultHeight =
    (45 / 3) * childrenNum + childrenNum * 45;

  return (
    <Screen>
      <Box flexDirection="column" my={5}>
        <Box my={4}>
          <Box color="#636e72">{label}</Box>
        </Box>
        <Box
          flexDirection="column"
          height={height || defaultHeight}
          justifyContent="space-between"
        >
          {children}
        </Box>
      </Box>
    </Screen>
  );
};

const PortalScreen: React.FC<
  RouteComponentProps
> = () => {
  const [firstName, onFirstNameChange] = useField('');
  const [lastName, onLastNameChange] = useField('');
  const [birthday, onBirthdayChange] = useField('');

  const [streetNum, onStreetNumChange] = useField('');
  const [streetName, onStreetNameChange] = useField(
    '',
  );
  const [cityName, onCityNameChange] = useField('');
  const [uniScore, onUniScoreChange] = useField('');
  const [
    englishScore,
    onEnglishScoreChange,
  ] = useField('');

  const [is985, setIs985] = useState<
    boolean | undefined
  >(undefined);

  return (
    <Box
      flexDirection="column"
      width={[1, '400px']}
      px={[5, 3]}
      pt={5}
      pb={7}
      height="100vh"
      overflowX="hidden"
      overflowY="auto"
    >
      <InputsBox label="基本信息" height="260px">
        <Input
          type="text"
          placeholder="请输入姓"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <Input
          type="text"
          placeholder="请输入名"
          value={lastName}
          onChange={onLastNameChange}
        />
        <Input
          type="text"
          placeholder="请输入生日"
          value={birthday}
          onChange={onBirthdayChange}
        />
        <YesOrNo
          yesText="男"
          noText="女"
          value
          onClick={x => () => {}}
        />
      </InputsBox>
      <InputsBox label="家庭住址">
        <Input
          type="text"
          placeholder="街道号"
          value={streetNum}
          onChange={onStreetNumChange}
        />
        <Input
          type="text"
          placeholder="街道名"
          value={streetName}
          onChange={onStreetNameChange}
        />
        <Input
          type="text"
          placeholder="城市"
          value={cityName}
          onChange={onCityNameChange}
        />
      </InputsBox>
      <InputsBox label="学历状况">
        <RecentDegreeDropDown />
        <Box alignItems="center">
          <Box>学校是否985/211</Box>
          <YesOrNo
            yesText="是"
            noText="否"
            value
            onClick={x => () => {
              setIs985(x);
            }}
          />
        </Box>
        {is985 && <ChinaUniListDropDown />}
        {is985 === false && (
          <Input
            type="text"
            placeholder="大学名称"
            value={cityName}
            onChange={onCityNameChange}
          />
        )}
        <Input
          type="text"
          placeholder="请输入你的大学平均成绩"
          value={uniScore}
          onChange={onUniScoreChange}
        />
        <Input
          type="text"
          placeholder="请输入你的英文测试成绩"
          value={englishScore}
          onChange={onEnglishScoreChange}
        />
      </InputsBox>
    </Box>
  );
};

export default PortalScreen;
