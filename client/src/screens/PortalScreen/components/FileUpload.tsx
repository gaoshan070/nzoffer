import React from 'react';
import { Box, Button, Text, Paragraph, Heading, SPACE } from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import { UploadFile } from '../../../components/UploadFile';
import { observer } from 'mobx-react-lite';

const File: React.FC<{ label: string; noLine?: boolean }> = observer(
  ({ label, noLine }) => (
    <Box direction="column">
      <Box gap={'19px'} alignItems={'center'}>
        <Box borderRadius={'50%'} width={'8px'} height={'8px'} bg={'grey'} />
        <UploadFile
          label={label}
          isPublicRead
          fileName={'asdasd.j'}
          getUploadedURL={(url: string) => url}
        />
      </Box>
      {!noLine && (
        <Box
          borderBottom="1px solid"
          borderColor="#F4F5F6"
          mt={SPACE.xxxxSmall}
        />
      )}
    </Box>
  ),
);

export const FileUpload: React.FC = observer(({}) => (
  <SectionWithTitle title="请提交以下资料：">
    <Box direction="column" gap={SPACE.xxSmall}>
      <File label="护照个人信息页" />
      <File label="大学 / 高中成绩单" />
      <File label="语言测试成绩单" />
      <File label="其他文件" />
    </Box>
  </SectionWithTitle>
));
