import React, { useState } from 'react';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import Input, {
  useField,
} from '../../components/Input';
import YesOrNo from '../../components/YesOrNo/YesOrNo';
import { RouteComponentProps } from 'react-router';
import RecentDegreeDropDown from './components/RecentDegree';
import ChinaUniListDropDown from './components/ChinaUniListDropDown';
import Screen from '../../components/Screen';
import { DropDownArrow } from '../../components/DropDown/DropDownArrow';
import { DropDownAnimation } from '../../components/DropDown/DropDown.animation';
import theme from '../../styles/theme';
import { ROUTES } from '../../routes/routesConfig';

export const InputsBox: React.FC<{
  label: string;
  height?: string;
  shouldOpen?: boolean;
}> = ({ label, height, shouldOpen, children }) => {
  const [isOpen, setIsOpen] = useState(
    shouldOpen || false,
  );
  const childrenCount = React.Children.count(children);

  return (
    <Box
      my={5}
      flexDirection="column"
      justifyContent={isOpen ? 'flex-start' : 'center'}
      bg="white1"
      width={[1, '40rem']}
      px={7}
      py={isOpen ? 6 : 5}
      height={isOpen ? height : 'auto'}
      border="primary"
      position="relative"
      boxShadow={0}
    >
      <Box
        onClick={() => setIsOpen(v => !v)}
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Text
          color="primary"
          fontSize="2"
          fontWeight="bold"
          alignItems="center"
        >
          {label + '：'}
        </Text>
        <DropDownArrow isOpen={isOpen} />
      </Box>
      <DropDownAnimation
        isOpen={isOpen}
        style={{
          paddingLeft: theme.space[7],
          paddingRight: theme.space[7],
          top: '6rem',
          left: 0,
          border: 'none',
          height: 'max-content',
          maxHeight: 'inherit',
          boxShadow: 'none',
        }}
      >
        <Box
          flexDirection="column"
          justifyContent="space-between"
        >
          {React.Children.map(
            children,
            (item, index) =>
              React.isValidElement(item) ? (
                <Box
                  mb={
                    index + 1 === childrenCount ? 0 : 7
                  }
                >
                  {item}
                </Box>
              ) : null,
          )}
        </Box>
      </DropDownAnimation>
    </Box>
  );
};

const FinishRegisteringScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
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
        flexDirection="column"
        alignItems="center"
        width={1}
        overflowX="hidden"
        overflowY="auto"
        pb={5}
        height="max-content"
        bg="background"
      >
        <InputsBox
          label="基本信息"
          height="28rem"
          shouldOpen
        >
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
        <InputsBox
          label="家庭住址"
          height="22rem"
          shouldOpen
        >
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
        <InputsBox
          label="学历状况"
          height="35rem"
          shouldOpen
        >
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

        <Button
          text="开始选择学校"
          onClick={() =>
            history.push(ROUTES.SELECT_SCHOOL)
          }
        />
      </Box>
    </Screen>
  );
};

export default FinishRegisteringScreen;
