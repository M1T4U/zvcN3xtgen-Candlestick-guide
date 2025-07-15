
export enum Page {
  INTRODUCTION = 'Introduction',
  ENGULFING = 'Engulfing Candle',
  MOMENTUM = 'Momentum Candle',
  MULTIPLE = 'Multiple Patterns',
  DOJI = 'Doji Candle',
  HAMMER = 'Hammer',
  SHOOTING_STAR = 'Shooting Star',
  TWEEZER = 'Tweezer Top & Bottom',
  MARUBOZU = 'Marubozu Candle',
  QUIZ = 'Quiz Me',
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
