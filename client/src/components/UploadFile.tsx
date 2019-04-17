import React, { useRef, useState, CSSProperties, RefObject } from 'react';
import { observer } from 'mobx-react-lite';
import OSS from 'ali-oss';
import { Box, Text, LoadingButton, COLORS } from '../styles';
import Alert from 'react-s-alert';
import { LOADING_STATUS } from '../utils/constants';

const PUBLIC_BUCKET_URL = process.env.REACT_APP_PUBLIC_BUCKET;
const PRIVATE_BUCKET_URL = process.env.REACT_APP_PRIVATE_BUCKET;

const BUTTON_STYLE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '3px 32px 3px 32px',
  borderRadius: '0px',
  backgroundColor: COLORS.primary,
  color: COLORS.white1,
  cursor: 'pointer',
};

const client = (isPublicRead: boolean) => {
  return new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAIbvfxXVW5uUOR',
    accessKeySecret: 'gEmwLGLbfs4uv3H5lnazHi8hVeJK0l',
    bucket: isPublicRead ? PUBLIC_BUCKET_URL : PRIVATE_BUCKET_URL,
  });
};

const isFileExist = (inputRef: RefObject<HTMLInputElement>): boolean =>
  !!(
    inputRef &&
    inputRef.current &&
    inputRef.current.files &&
    inputRef.current.files.length > 0
  );

export const UploadFile: React.FC<{
  label: string;
  isPublicRead: boolean;
  fileName: string;
  fileURL?: string;
  getUploadedURL: (url: string) => void;
}> = observer(({ isPublicRead, label, fileName, getUploadedURL, fileURL }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState<LOADING_STATUS>(
    LOADING_STATUS.INITIAL,
  );

  const isUploading = loadingStatus === LOADING_STATUS.LOADING;
  const isUploaded = loadingStatus === LOADING_STATUS.LOADED;
  const isUploadFailed = loadingStatus === LOADING_STATUS.FAILED;

  async function onClick(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (!isFileExist(fileInputRef)) return;

    const file = fileInputRef!.current!.files![0];

    // @ts-ignore
    const option: OSS.PutObjectOptions = {
      mime: file.type,
    };

    try {
      setLoadingStatus(LOADING_STATUS.LOADING);

      const result = await client(isPublicRead).put(fileName, file, option);

      setLoadingStatus(LOADING_STATUS.LOADED);

      Alert.success('文件上传成功');

      if (typeof getUploadedURL === 'function') {
        // @ts-ignore
        getUploadedURL(result.url);
      }
    } catch (e) {
      setLoadingStatus(LOADING_STATUS.FAILED);
      Alert.error('文件上传失败，请稍候再试');
    } finally {
      setIsFileSelected(false);
    }
  }

  function fileInputOnChange() {
    if (isFileExist(fileInputRef)) {
      if (!isFileSelected) {
        setIsFileSelected(true);
      }
    } else {
      if (isFileSelected) {
        setIsFileSelected(false);
      }
    }
  }

  return (
    <form encType="multipart/form-data" style={{ width: '100%' }}>
      <Box justifyContent="between" alignItems="center">
        <Text width={0.4}>{label}</Text>
        {(fileURL || isUploaded) && (
          <Text color={COLORS.green} fontSize="18px" width={0.3}>
            已上传
          </Text>
        )}
        <input
          ref={fileInputRef}
          onChange={fileInputOnChange}
          id={`upload-file`}
          style={{ visibility: 'hidden', width: '1px' }}
          type="file"
        />
        {isFileSelected ? (
          <LoadingButton
            css={{
              padding: '3px 32px 3px 32px',
              borderRadius: '0px',
              minHeight: '0',
              maxHeight: 'none',
            }}
            isLoading={isUploading}
            borderRadius="0"
            onClick={onClick}
          >
            上传文件
          </LoadingButton>
        ) : (
          <label
            htmlFor="upload-file"
            style={{
              ...BUTTON_STYLE,
              backgroundColor: isUploaded ? '#74b9ff' : COLORS.primary,
            }}
          >
            {fileURL || isUploaded ? '替换' : '选择'}文件
          </label>
        )}
      </Box>
    </form>
  );
});
