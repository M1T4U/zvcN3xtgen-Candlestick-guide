import React from 'react';
import { TweezerTop, TweezerBottom } from '../../components/Illustrations';
import { H1, H2, P, Term, Card } from './ui';

const Tweezer: React.FC = () => (
    <div>
        <H1>Tweezer Top & Bottom</H1>
        <P>Tweezer patterns are two-candle reversal patterns where two consecutive candles have matching highs or lows.</P>
        <Card>
            <H2>Tweezer Top</H2>
            <P>A <Term>bearish reversal</Term> pattern found at the top of an uptrend. Two candles (typically opposite colors) have the same high price, indicating a resistance level that buyers failed to break through twice.</P>
            <TweezerTop />
        </Card>
        <Card>
            <H2>Tweezer Bottom</H2>
            <P>A <Term>bullish reversal</Term> pattern found at the bottom of a downtrend. Two candles have the same low price, indicating a support level where sellers failed to push the price lower.</P>
            <TweezerBottom />
        </Card>
        <H2>Trading Signal</H2>
        <P>Tweezer patterns suggest a stall in momentum and a potential reversal. They are most powerful when they appear at significant support or resistance levels and are composed of candles with strong bodies, like an engulfing or hammer candle.</P>
    </div>
);

export default Tweezer;
