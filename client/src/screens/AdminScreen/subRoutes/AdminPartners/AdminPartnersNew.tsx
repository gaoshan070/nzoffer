import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Text, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { useField } from '../../../../miscellaneous/hooks';
import { partnerService } from '../../../../utils/feathers';
import { getIsEdit, goBackIfRefreshInEditPage } from '../components/utils';
import { useAdminStore } from '../../../../store/store.context';
import { IPartner } from '../../../../store/AdminStore.type';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';
import { isEmailValid } from '../../../../shared/emailCheck';
import { isPhoneValid } from '../../../../shared/phoneCheck';
import { isChinese } from '../../../../shared/cnCheck';
import {
  RadioGroup,
  RadioButton,
} from '../../../../components/RadioGroup/RadioGroup';

export const AdminPartnersNew: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const { partners } = useAdminStore();
  goBackIfRefreshInEditPage(history, partners);
  const { isEdit, id } = getIsEdit();
  const itemToEdit = isEdit
    ? partners.find(item => item._id === id)
    : ({} as IPartner);

  const [nameState, nameStateOnChange] = useField(
    isEdit ? itemToEdit!.firstName : '',
  );
  const [phoneState, phoneStateOnChange] = useField(
    isEdit ? itemToEdit!.phone : '',
  );
  const [emailState, emailStateOnChange] = useField(
    isEdit ? itemToEdit!.email : '',
  );
  const [passwordState, passwordStateOnChange] = useField(
    isEdit ? itemToEdit!.password : '',
  );
  const [shouldSendEmailState, shouldSendEmailStateOnChange] = useState(
    isEdit ? itemToEdit!.shouldSendPartnerEmail : false,
  );

  const isValid = !!(
    isChinese(nameState) &&
    isEmailValid(emailState) &&
    isPhoneValid(phoneState) &&
    passwordState &&
    passwordState.length >= 12
  );

  return (
    <CommonEditNewScreen
      title="合作伙伴"
      feathersService={partnerService}
      dataToCreateOrUpdate={{
        firstName: nameState,
        phone: phoneState,
        email: emailState,
        password: passwordState,
        shouldSendPartnerEmail: shouldSendEmailState,
      }}
      isValid={isValid}
    >
      <Box direction="column" gap={SPACE.xSmall} minWidth="400px">
        <Input
          label="输入合伙伙伴名"
          placeholder="输入合伙伙伴名"
          validate={isChinese}
          errorMessage="合伙伙伴名必须是中文"
          value={nameState}
          onChange={nameStateOnChange}
        />
        <Input
          label="输入手机号"
          placeholder="输入手机号"
          validate={isPhoneValid}
          errorMessage="请输入格式正确的手机号"
          value={phoneState}
          onChange={phoneStateOnChange}
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
          description={isEdit ? '安全原因无法显示原密码，请修改成新密码' : ''}
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
