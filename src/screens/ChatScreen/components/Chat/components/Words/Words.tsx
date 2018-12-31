// @ts-ignore
import Typing from 'react-typing-animation';
import React from 'react';
import { PoseGroup } from 'react-pose';
import Box from '../../../../../../components/Box/Box';
import writingAnimation from '../../../../../../assets/writing.svg';
import { IBaseStepType } from '../../../../utils';
import {
  ScaleBox,
  FadeChild,
  FadeChildWithDelay,
} from './Words.animation';
import {
  WORDS_LOADING_STATUS,
  useLoadingStatus,
} from './loadingStatus';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const Words: React.FC<IWordsProps> = ({
  text,
  callback,
}) => {
  const loadingStatus = useLoadingStatus();

  return (
    <ScaleBox
      pose={
        loadingStatus === WORDS_LOADING_STATUS.NORMAL
          ? 'enter'
          : 'exit'
      }
    >
      <Box
        ml={3}
        boxShadow={0}
        height="auto"
        alignItems="center"
        px={4}
        py={1}
        borderRadius={4}
        bg="white1"
        minHeight="41px"
      >
        <PoseGroup>
          {loadingStatus ===
            WORDS_LOADING_STATUS.WRITING && (
            <FadeChildWithDelay key="img">
              <img
                src={writingAnimation}
                height="38px"
              />
            </FadeChildWithDelay>
          )}
          {loadingStatus ===
            WORDS_LOADING_STATUS.TYPING && (
            <FadeChild
              key="typing"
              style={{
                minHeight: '41px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typing
                speed={5}
                onFinishedTyping={callback}
              >
                <span>{text}</span>
              </Typing>
            </FadeChild>
          )}
        </PoseGroup>
      </Box>
    </ScaleBox>
  );
};

export default Words;
