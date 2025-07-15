import React from 'react';
import { MorningStar, EveningStar, ThreeWhiteSoldiers, ThreeBlackCrows } from '../../components/Illustrations';
import { H1, P, Term, Card } from './ui';

const MultiplePatterns: React.FC = () => (
    <div>
        <H1>Multiple Candlestick Patterns</H1>
        <P>Some of the most reliable signals are formed by a combination of three or more candlesticks. These patterns provide a more detailed story of the battle between buyers and sellers.</P>
        <Card>
            <h3 className="text-xl font-bold text-green-400 mb-2">Morning Star</h3>
            <P>A three-candle <Term>bullish reversal</Term> pattern found in downtrends. It consists of a large bearish candle, a small-bodied candle (or doji), and a large bullish candle.</P>
            <MorningStar />
        </Card>
        <Card>
            <h3 className="text-xl font-bold text-red-400 mb-2">Evening Star</h3>
            <P>The opposite of the Morning Star. A three-candle <Term>bearish reversal</Term> pattern in uptrends, consisting of a large bullish candle, a small-bodied candle, and a large bearish candle.</P>
            <EveningStar />
        </Card>
        <Card>
            <h3 className="text-xl font-bold text-green-400 mb-2">Three White Soldiers</h3>
            <P>A bullish reversal pattern of three consecutive long-bodied green candles, each closing higher than the last. Signals a strong shift from a downtrend to an uptrend.</P>
            <ThreeWhiteSoldiers />
        </Card>
         <Card>
            <h3 className="text-xl font-bold text-red-400 mb-2">Three Black Crows</h3>
            <P>A bearish reversal pattern of three consecutive long-bodied red candles, each closing lower than the last. Indicates a strong move into a downtrend.</P>
            <ThreeBlackCrows />
        </Card>
    </div>
);

export default MultiplePatterns;
