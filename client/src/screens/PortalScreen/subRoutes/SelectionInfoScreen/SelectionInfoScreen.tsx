import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import RecentDegreeDropDown from '../FinishRegisteringScreen/components/RecentDegree';
import ChinaUniListDropDown from '../FinishRegisteringScreen/components/ChinaUniListDropDown';
import Screen from '../../../../components/Screen';
import { InputsBox } from '../../components/InputsBox';
import { schools } from '../SelectSchoolScreen/SelectSchoolScreen';
import {
  UniName,
  PaperName,
  Description,
} from '../SelectSchoolScreen/components/SchoolCard/SchoolCard.others';
import {
  Box,
  Text,
  Input,
} from '../../../../rebase/components';
import { useField } from '../../../../miscellaneous/hooks';

const otago = schools[2];

export const SelectionInfoScreen: React.FC<
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
        <Text
          fontWeight="bold"
          fontSize="sectionHeading"
          my="medium"
        >
          太棒了，你已完成了你的个人选择
        </Text>
        <InputsBox
          label="课程信息"
          height="18rem"
          shouldOpen
        >
          <Box width={1}>
            <Box
              direction="column"
              alignItems="center"
              width={0.5}
            >
              <UniName
                uniNameCN={otago.uniNameCN}
                uniNameEN={otago.uniNameEN}
              />
              <PaperName
                paperNameCN={otago.paperNameCN}
                paperNameEN={otago.paperNameEN}
              />
            </Box>
            <Box
              direction="column"
              width={0.5}
              alignItems="center"
            >
              <Description
                duration={otago.duration}
                enroll={otago.enroll}
                fee={otago.fee}
                difficulties={otago.difficulties}
                ielts={otago.ielts}
                city={otago.city}
              />
            </Box>
          </Box>
        </InputsBox>
        <InputsBox label="基本信息" height="28rem">
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
            notScrollInToView
            yesText="男"
            noText="女"
            value
            onClick={x => () => {}}
          />
        </InputsBox>
        <InputsBox label="家庭住址" height="22rem">
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
        <InputsBox label="学历状况" height="35rem">
          <RecentDegreeDropDown />
          <Box alignItems="center">
            <Box>学校是否985/211</Box>
            <YesOrNo
              notScrollInToView
              yesText="是"
              noText="否"
              value
              initialState={is985}
              onClick={x => () => {
                setIs985(x);
              }}
            />
          </Box>
          {is985 && <ChinaUniListDropDown />}
          {!is985 && (
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

        <Box alignItems="center">
          <label>
            <input type="checkbox" />
            <span />
            <Text
              display="inline"
              fontSize="small"
              ml="small"
            >
              我已经阅读并同意offer111.com的条款和条件
            </Text>
          </label>
        </Box>
      </Box>
    </Screen>
  );
};
