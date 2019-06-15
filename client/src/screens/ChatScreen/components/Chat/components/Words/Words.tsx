// import Typing from 'react-typing-animation';
import React, { useContext } from 'react';
import { Transition } from 'react-pose';
import LoadingAnimation from '../../../../../../assets/Loading-animation.gif';
import { IBaseStepType } from '../../../../utils';
import { FadeChild, FadeChildWithDelay } from './Words.animation';
import { WORDS_LOADING_STATUS, useLoadingStatus } from './loadingStatus';
import { WordsWrapper, WordsInnerWrapper } from './WordsWrapper';
import { StoreContext } from '../../../../../../store/store.context';
import { Image } from '../../../../../../styles';
import SplitText from 'react-pose-text';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const charPoses = {
  exit: { opacity: 0, x: -10 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }: { charIndex: number }) => charIndex * 90,
  },
};

// @ts-ignore
const MoveWord: React.FC<{
  callback: Function;
  children: string | undefined;
}> = ({ callback, children = '' }) => {
  setTimeout(() => {
    callback();
  }, 1900);

  return (
    // @ts-ignore
    <SplitText
      initialPose="exit"
      pose="enter"
      charPoses={charPoses}
      onPoseComplete={() => {
        console.log(112233);
      }}
    >
      {children}
    </SplitText>
  );
};

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
            <MoveWord callback={callback}>{text}</MoveWord>
            {/* <Typing speed={24} hideCursor onFinishedTyping={callback}>
              <span key="show me">{text}</span>
            </Typing> */}
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
