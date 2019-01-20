import React, { useState } from 'react';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { RouteComponentProps } from 'react-router';
import RecentDegreeDropDown from './components/RecentDegree';
import ChinaUniListDropDown from './components/ChinaUniListDropDown';
import Screen from '../../../../components/Screen';
import { ROUTES } from '../../../../routes/routesConfig';
import { InputsBox } from '../../components/InputsBox';
import {
  Box,
  Button,
} from '../../../../rebase/components';
import { useField } from '../../../../miscellaneous/hooks';
import { Input } from '../../../../components/Input';

const FinishRegisteringScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
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

  const [is985, setIs985] = useState<boolean>(false);

  return (
    <Screen>
      <Box
        direction="column"
        alignItems="center"
        width={1}
        overflowX="hidden"
        overflowY="auto"
        py="medium"
        height="max-content"
        bg="background"
      >
        <InputsBox label="基本信息" shouldOpen>
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
          <Box alignSelf="end">
            <YesOrNo
              notScrollInToView
              yesText="男"
              noText="女"
              value
              onClick={x => () => {}}
            />
          </Box>
        </InputsBox>
        <InputsBox label="联系方式" shouldOpen>
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
          <Input
            type="email"
            placeholder="请输入电子邮箱"
            value={birthday}
            onChange={onBirthdayChange}
          />
        </InputsBox>
        <InputsBox label="学历状况" shouldOpen>
          <RecentDegreeDropDown />
          <Box
            justifyContent="between"
            gap="small"
            direction="column"
          >
            <Box>你所就读的学校是否属于211院校</Box>
            <Box alignSelf="end">
              <YesOrNo
                notScrollInToView
                yesText="是"
                noText="否"
                value={is985}
                initialState={is985}
                onClick={x => () => {
                  setIs985(x);
                }}
              />
            </Box>
          </Box>
          {is985 ? (
            <ChinaUniListDropDown />
          ) : (
            <Input
              type="text"
              placeholder="请输入你的大学名称"
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

        <Button
          onClick={() =>
            history.push(ROUTES.SELECT_SCHOOL)
          }
        >
          开始选择学校
        </Button>
      </Box>
    </Screen>
  );
};

export default FinishRegisteringScreen;
