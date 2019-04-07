export const VALIDATION_STATUS = {
  NORMAL: 'NORMAL',
  CORRECT: 'CORRECT',
  WRONG: 'WRONG',
};

type ValueOf<T> = T[keyof T];

export type ValueOfValidationStatus = ValueOf<typeof VALIDATION_STATUS>;

export const getRandom = () =>
  Math.random()
    .toString(36)
    .substring(2, 4) +
  Math.random()
    .toString(36)
    .substring(2, 5);

export const updateCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  letters: string,
) => {
  const canvas = canvasRef.current;

  if (canvas) {
    const context = canvas.getContext('2d');

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = 'italic 70px sans';
      context.textAlign = 'end';
      context.fillText(letters, 155, 100);
    }
  }
};
