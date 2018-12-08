import React from 'react';
import Box from '../../components/Box/Box';
import Input, {
  useField,
} from '../../components/Input';
import { RouteComponentProps } from 'react-router';

const InputsBox: React.FC<{ label: string }> = ({
  label,
  children,
}) => {
  const childrenNum = React.Children.count(children);
  const height =
    (45 / 3) * childrenNum + childrenNum * 45;

  return (
    <Box flexDirection="column" my={5}>
      <Box my={4}>
        <Box color="#636e72">{label}</Box>
      </Box>
      <Box
        flexDirection="column"
        height={height}
        justifyContent="space-between"
      >
        {children}
      </Box>
    </Box>
  );
};

const PortalScreen: React.FC<
  RouteComponentProps
> = () => {
  const [firstName, onFirstNameChange] = useField('');
  const [lastName, onLastNameChange] = useField('');
  const [birthday, onBirthdayChange] = useField('');

  return (
    <Box
      flexDirection="column"
      width={[1, '400px']}
      px={[5, 3]}
      pt={5}
      pb={7}
      overflowX="hidden"
      overflowY="auto"
    >
      <InputsBox label="基本信息">
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
      </InputsBox>
    </Box>
  );
};

export default PortalScreen;
