import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Text, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { partnerService } from '../../../../utils/feathers';
import { getIsEdit } from '../components/utils';
import { useAdminStore } from '../../../../store/store.context';
import { IPartner } from '../../../../store/AdminStore.type';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import { isEmailValid } from '../../../../shared/emailCheck';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';

export const AdminPartnersNew: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const { partners } = useAdminStore();
  const { isEdit, id } = getIsEdit();
  const itemToEdit = isEdit
    ? partners.find(item => item._id === id)
    : ({} as IPartner);

  const [nameState, nameStateOnChange] = useField(
    isEdit ? itemToEdit!.name : '',
  );
  const [emailState, emailStateOnChange] = useField(
    isEdit ? itemToEdit!.email : '',
  );
  const [passwordState, passwordStateOnChange] = useField(
    isEdit ? itemToEdit!.password : '',
  );
  const [shouldSendEmailState, shouldSendEmailStateOnChange] = useState(
    isEdit ? itemToEdit!.shouldSendEmail : false,
  );

  const isValid = !!(
    nameState &&
    emailState &&
    passwordState &&
    passwordState.length >= 12
  );

  return (
    <CommonEditNewScreen
      title="合作伙伴"
      feathersService={partnerService}
      dataToCreateOrUpdate={{
        name: nameState,
        email: emailState,
        password: passwordState,
        shouldSendEmail: shouldSendEmailState,
      }}
      isValid={isValid}
    >
      <Box direction="column" gap={SPACE.xSmall} minWidth="400px">
        <Input
          label="输入合伙伙伴名"
          placeholder="输入合伙伙伴名"
          validate={v => v !== ''}
          errorMessage="合伙伙伴名不能为空"
          value={nameState}
          onChange={nameStateOnChange}
        />
        <Input
          label="输入电子邮件"
          placeholder="输入电子邮件"
          validate={isEmailValid}
          errorMessage="请输入格式正确的电子邮件"
          value={emailState}
          onChange={emailStateOnChange}
        />
        <Input
          label={
            <div>
              输入密码
              <a
                href="https://www.lastpass.com/password-generator"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: '8px' }}
              >
                (点击生成密码)
              </a>
            </div>
          }
          placeholder="输入密码"
          validate={v => !!v && v.length >= 12}
          errorMessage="请输入至少12位的密码"
          value={passwordState}
          onChange={passwordStateOnChange}
        />
        <Box justifyContent="between" gap={SPACE.xxSmall} direction="column">
          <Text>是否发送电子邮件</Text>
          <RadioGroup
            name="shouldSendEmail"
            selectedValue={shouldSendEmailState.toString()}
            onChange={e => {
              // @ts-ignore
              shouldSendEmailStateOnChange(e.currentTarget.value);
            }}
            alignItems="center"
          >
            <RadioButton value label="是" />
            <RadioButton value={false} label="否" />
          </RadioGroup>
        </Box>
      </Box>
    </CommonEditNewScreen>
  );
};
