// @ts-ignore
import Typing from 'react-typing-animation';
import React, { useContext } from 'react';
import { PoseGroup } from 'react-pose';
import writingAnimation from '../../../../../../assets/writing.svg';
import { IBaseStepType } from '../../../../utils';
import {
  FadeChild,
  FadeChildWithDelay,
} from './Words.animation';
import {
  WORDS_LOADING_STATUS,
  useLoadingStatus,
} from './loadingStatus';
import { WordsWrapper } from './WordsWrapper';
import { ChatScreenStoreContext } from '../../../../../../store/ChatScreenStore/ChatScreenStore.context';
import { Image } from '../../../../../../styles';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const Words: React.FC<IWordsProps> = ({
  text,
  index = 0,
  callback,
}) => {
  const isExecuted =
    useContext(ChatScreenStoreContext)
      .currentStepIndex > index;

  const loadingStatus = useLoadingStatus(isExecuted);

  return (
    <WordsWrapper loadingStatus={loadingStatus}>
      <PoseGroup>
        {loadingStatus ===
          WORDS_LOADING_STATUS.WRITING && (
          <FadeChildWithDelay key="img">
            <Image
              src={writingAnimation}
              width="2rem"
              minHeight="48px"
            />
          </FadeChildWithDelay>
        )}
        {loadingStatus ===
          WORDS_LOADING_STATUS.TYPING && (
          <FadeChild
            key="typing"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typing
              speed={5}
              hideCursor
              onFinishedTyping={callback}
            >
              <span
                key="show me"
                style={{ fontSize: '1rem' }}
              >
                {text}
              </span>
            </Typing>
          </FadeChild>
        )}
        {loadingStatus ===
          WORDS_LOADING_STATUS.FINISHED && (
          <span key="asd">{text}</span>
        )}
      </PoseGroup>
    </WordsWrapper>
  );
};

export default Words;
