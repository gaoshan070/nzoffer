import React from 'react';
import { Box, Button, Text, Paragraph, Heading, SPACE } from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import { UploadFile } from '../../../components/UploadFile';
import { observer } from 'mobx-react-lite';

const File: React.FC<{
  label: string;
  noLine?: boolean;
  id: string;
  fileName: string;
}> = observer(({ label, noLine, id, fileName }) => (
  <Box direction="column">
    <Box gap={'19px'} alignItems={'center'}>
      <Box borderRadius={'50%'} width={'8px'} height={'8px'} bg={'grey'} />
      <UploadFile
        id={id}
        label={label}
        isPublicRead
        fileName={fileName}
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
));

// 必需材料：
// 有效护照照片页和签字页
// 毕业证（含英文翻译或英文公证书)
// 成绩单（含英文翻译或英文公证书)

// 额外补充材料选项：
// 英语测试成绩单（高一毕业以上）
// 作品集（Portfolio）
// 个人简历（CV）
// NZQA学历认证
// SOP（个人陈述）
// 面试（Interview）
// 推荐信（Reference Letter）
// 工作证明信
// 其它资料

const getFileName = (userId: string, append: string) =>
  `${userId}-file-passport`;

export const FileUpload: React.FC<{ userId: string }> = observer(
  ({ userId }) => (
    <SectionWithTitle title="请提交以下资料：">
      <Box direction="column" gap={SPACE.xxSmall}>
        <File
          label="护照个人信息页"
          id="file-passport"
          fileName={getFileName(userId, 'passport')}
        />
        <File
          label="毕业证及(英文翻译或英文公证书)"
          id="file-2"
          fileName={getFileName(userId, 'graduate-cert')}
        />
        <File
          label="成绩单及(英文翻译或英文公证书)"
          id="file-3"
          fileName={getFileName(userId, 'transcript')}
        />
      </Box>
    </SectionWithTitle>
  ),
);
