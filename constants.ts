import { Page, QuizQuestion } from './types';

export const NAV_ITEMS: Page[] = [
  Page.INTRODUCTION,
  Page.ENGULFING,
  Page.MOMENTUM,
  Page.MULTIPLE,
  Page.DOJI,
  Page.HAMMER,
  Page.SHOOTING_STAR,
  Page.TWEEZER,
  Page.MARUBOZU,
  Page.QUIZ,
];

export const TERM_DEFINITIONS: { [key: string]: string } = {
  'bullish': 'Indicates a belief that a price will rise. A bullish trend is an upward trend.',
  'bearish': 'Indicates a belief that a price will fall. A bearish trend is a downward trend.',
  'open': 'The price at the beginning of a trading period.',
  'high': 'The highest price reached during a trading period.',
  'low': 'The lowest price reached during a trading period.',
  'close': 'The price at the end of a trading period.',
  'reversal': 'A change in the direction of a price trend.',
  'upward reversal': 'A change from a downtrend to an uptrend.',
  'downward reversal': 'A change from an uptrend to a downtrend.',
  'indecision': 'A state where neither buyers nor sellers are in control, often leading to a potential change in trend.',
  'turning point': 'A point at which a significant change in trend occurs.',
  'confirmation candle': 'A candle that appears after a pattern, confirming the signal. For a bullish pattern, it\'s a green candle; for a bearish one, it\'s a red candle.',
  'support': 'A price level where a downtrend can be expected to pause due to a concentration of demand.',
  'resistance': 'A price level where an uptrend can be expected to pause due to a concentration of supply.',
  'extreme, one-sided momentum': 'A market condition where either buyers (bullish) or sellers (bearish) are in complete control.',
};


export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Which pattern consists of a small real body and a long lower wick, appearing in a downtrend?',
    options: ['Shooting Star', 'Hammer', 'Doji', 'Engulfing'],
    correctAnswer: 'Hammer',
    explanation: 'A Hammer is a bullish reversal pattern that forms during a downtrend. It has a long lower wick and a small body at the top.'
  },
  {
    question: 'A Bearish Engulfing pattern is characterized by:',
    options: [
      'A small green candle followed by a larger red candle that engulfs it.',
      'A small red candle followed by a larger green candle that engulfs it.',
      'Two candles of the same size.',
      'A candle with no wicks.'
    ],
    correctAnswer: 'A small green candle followed by a larger red candle that engulfs it.',
    explanation: 'A Bearish Engulfing pattern signals a potential downturn, where sellers have overtaken buyers, represented by a large red candle engulfing the prior green one.'
  },
  {
    question: 'What does a Doji candle typically signify?',
    options: ['Strong bullish momentum', 'Strong bearish momentum', 'Indecision in the market', 'A guaranteed reversal'],
    correctAnswer: 'Indecision in the market',
    explanation: 'A Doji indicates a standoff between buyers and sellers, where the open and close prices are very close, signaling market indecision.'
  },
  {
    question: 'Which pattern is known as a strong bearish reversal pattern that appears after an uptrend?',
    options: ['Morning Star', 'Three White Soldiers', 'Evening Star', 'Bullish Marubozu'],
    correctAnswer: 'Evening Star',
    explanation: 'The Evening Star is a three-candle bearish reversal pattern that appears at the top of an uptrend.'
  },
  {
      question: 'What does a Marubozu candle with no wicks indicate?',
      options: ['Market indecision', 'Extreme momentum in one direction', 'A potential trend change', 'Low trading volume'],
      correctAnswer: 'Extreme momentum in one direction',
      explanation: 'A Marubozu candle has a full body with no upper or lower wicks, signifying that one side (buyers or sellers) was in complete control from open to close.'
  }
];