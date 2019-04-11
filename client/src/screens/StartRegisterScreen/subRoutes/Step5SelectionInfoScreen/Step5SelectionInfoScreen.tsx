import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { China211DropDown } from '../Step3EducationBackgroundScreen/components/Step3Inputs/components/components/China211DropDown';
import Screen from '../../../../components/Screen';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import {
  UniList,
  schools,
} from '../Step4SelectSchoolScreen/components/UniList';
import { Description } from '../Step4SelectSchoolScreen/components/UniCard/components/Description';
import { PaperName } from '../Step4SelectSchoolScreen/components/UniCard/components/PaperName';
import { UniName } from '../Step4SelectSchoolScreen/components/UniCard/components/UniName';
import { Box, FONT_SIZE, SPACE, Text } from '../../../../styles';
import { useField } from '../../../../miscellaneous/hooks';
import { Input } from '../../../../components/Input';
import { ROUTES } from '../../../../routes/routesConfig';
import { BottomNavBar } from '../components/BottomNavBar';

const otago = schools[2];

export const Step5SelectionInfoScreen: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const [firstName, onFirstNameChange] = useField('');
  const [lastName, onLastNameChange] = useField('');
  const [birthday, onBirthdayChange] = useField('');

  const [streetNum, onStreetNumChange] = useField('');
  const [streetName, onStreetNameChange] = useField('');
  const [cityName, onCityNameChange] = useField('');
  const [uniScore, onUniScoreChange] = useField('');
  const [englishScore, onEnglishScoreChange] = useField('');

  const [is985, setIs985] = useState<boolean>(false);

  return (
    <Screen>
      <Box
        direction="column"
        alignItems="center"
        width={1}
        overflowX="hidden"
        overflowY="auto"
        pt={SPACE.medium}
        pb={SPACE.large}
        bg="background"
      >
        <Text
          fontWeight="bold"
          fontSize={FONT_SIZE.sectionHeading}
          my={SPACE.xxxSmall}
        >
          太棒了，你已完成了你的个人选择
        </Text>

        <Box alignItems="center">
          <label>
            <input type="checkbox" />
            <span />
            <Text display="inline" fontSize={FONT_SIZE.small} ml={SPACE.small}>
              我已经阅读并同意offer111.com的条款和条件
            </Text>
          </label>
        </Box>
      </Box>
      <BottomNavBar
        history={history}
        continueOnClick={() => {
          history.push(ROUTES.PORTAL);
        }}
      />
    </Screen>
  );
};
