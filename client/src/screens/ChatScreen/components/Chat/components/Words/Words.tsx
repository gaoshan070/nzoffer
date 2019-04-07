// @ts-ignore
import Typing from 'react-typing-animation';
import React, { useContext } from 'react';
import { PoseGroup, Transition } from 'react-pose';
import writingAnimation from '../../../../../../assets/writing.svg';
import LoadingAnimation from '../../../../../../assets/Loading-animation.gif';
import { IBaseStepType } from '../../../../utils';
import { FadeChild, FadeChildWithDelay } from './Words.animation';
import { WORDS_LOADING_STATUS, useLoadingStatus } from './loadingStatus';
import { WordsWrapper, WordsInnerWrapper } from './WordsWrapper';
import { StoreContext } from '../../../../../../store/store.context';
import { Image } from '../../../../../../styles';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const Words: React.FC<IWordsProps> = ({ text, index = 0, callback }) => {
  const isExecuted =
    useContext(StoreContext).chatStore.currentStepIndex > index;

  const loadingStatus = useLoadingStatus(isExecuted);

  if (loadingStatus === WORDS_LOADING_STATUS.JUST_SHOW) {
    return (
      <WordsInnerWrapper>
        <span>{text}</span>
      </WordsInnerWrapper>
    );
  }

  return (
    <WordsWrapper loadingStatus={loadingStatus}>
      <Transition animatedOnMount>
        {loadingStatus === WORDS_LOADING_STATUS.WRITING && (
          <FadeChildWithDelay key="img">
            <Image src={LoadingAnimation} width="2rem" minHeight="48px" />
          </FadeChildWithDelay>
        )}
        {loadingStatus === WORDS_LOADING_STATUS.TYPING && (
          <FadeChild
            key="typing"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typing speed={24} hideCursor onFinishedTyping={callback}>
              <span key="show me">{text}</span>
            </Typing>
          </FadeChild>
        )}
        {loadingStatus === WORDS_LOADING_STATUS.FINISHED && (
          <span key="asd">{text}</span>
        )}
      </Transition>
    </WordsWrapper>
  );
};

export default Words;
