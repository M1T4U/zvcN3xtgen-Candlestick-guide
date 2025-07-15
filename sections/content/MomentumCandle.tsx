import React from 'react';
import { BullishMarubozu, BearishMarubozu } from '../../components/Illustrations';
import { H1, H2, P, Term, Card } from './ui';

const MomentumCandle: React.FC = () => (
    <div>
        <H1>Momentum Candle</H1>
        <P>A momentum candle is a large-bodied candlestick with small or non-existent wicks. It indicates strong buying or selling pressure and suggests that the current trend is likely to continue.</P>
        <Card>
            <H2>What It Indicates</H2>
            <P>A large green momentum candle shows <Term>strong bullish conviction</Term>, while a large red one shows <Term>strong bearish conviction</Term>. Unlike reversal patterns, these are continuation signals.</P>
            <div className="grid md:grid-cols-2 gap-8 my-4">
              <BullishMarubozu />
              <BearishMarubozu />
            </div>
            <P className="text-center">These are also known as Marubozu candles, the purest form of a momentum candle.</P>
        </Card>
        <H2>Best Timeframes</H2>
        <P>Momentum candles are significant on all timeframes, but they carry more weight on higher timeframes like the 4-hour, daily, or weekly charts. A strong momentum candle on a daily chart can set the tone for several days of trading.</P>
    </div>
);

export default MomentumCandle;
