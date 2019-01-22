import React from 'react';
import {
  Box,
  Button,
  Text,
  Paragraph,
  Heading,
  SPACE,
} from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';

const File: React.FC<{ label: string }> = ({
  label,
}) => (
  <Box
    width={1}
    justifyContent="between"
    alignItems="center"
  >
    {label}
    <Button>上传文件</Button>
  </Box>
);

export const FileUpload: React.FC = ({}) => (
  <SectionWithTitle title="请提交以下资料">
    <Box direction="column" gap={SPACE.medium}>
      <File label="护照个人信息页" />
      <File label="大学 / 高中成绩单" />
      <File label="语言测试成绩单" />
      <File label="其他文件" />
    </Box>
  </SectionWithTitle>
);
