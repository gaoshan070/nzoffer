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
import { WordsWrapper } from './WordsWrapper';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const Words: React.FC<IWordsProps> = ({
  text,
  callback,
}) => {
  const loadingStatus = useLoadingStatus();

  return (
    <WordsWrapper loadingStatus={loadingStatus}>
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
    </WordsWrapper>
  );
};

export default Words;
