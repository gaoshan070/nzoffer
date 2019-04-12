import posed from 'react-pose';

export const ScaleBox = posed.div({
  initialPose: 'exit',
  enter: {
    scaleX: 1,
    originX: 0,
    originY: 0,
    applyAtEnd: { width: 'auto' },
    transition: {
      delay: 420,
      duration: 800,
      ease: [0.53, 0.01, 0.36, 1.63],
    },
  },
  exit: { scaleX: 0, originX: 0, originY: 0 },
});

export const FadeChildWithDelay = posed.div({
  enter: {
    opacity: 1,
    transition: {
      delay: 500,
    },
  },
  exit: { opacity: 0 },
});

export const FadeChild = posed.div({
  enter: {
    opacity: 1,
    transition: {
      delay: 390,
    },
  },
  exit: { opacity: 0 },
});
