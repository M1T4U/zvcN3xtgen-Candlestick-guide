import React from 'react';
import { BullishMarubozu, BearishMarubozu } from '../../components/Illustrations';
import { H1, H2, P, Term, Card } from './ui';

const Marubozu: React.FC = () => (
    <div>
        <H1>Marubozu Candle</H1>
        <P>The Marubozu is a powerful single-candle pattern characterized by a full body with no upper or lower wicks. The name means "bald head" in Japanese. It represents <Term>extreme, one-sided momentum</Term>.</P>
        <Card>
            <H2>Bullish vs. Bearish Marubozu</H2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Bullish Marubozu</h3>
                    <P>A long green candle with no wicks. The open is the low, and the close is the high. It signals <Term>extreme buying pressure</Term> and is often the start of a bullish move or a continuation of an uptrend.</P>
                    <div className="flex justify-center"><BullishMarubozu /></div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Bearish Marubozu</h3>
                    <P>A long red candle with no wicks. The open is the high, and the close is the low. It signals <Term>extreme selling pressure</Term> and can mark the start of a bearish move or a continuation of a downtrend.</P>
                    <div className="flex justify-center"><BearishMarubozu /></div>
                </div>
            </div>
        </Card>
        <H2>Momentum Signals</H2>
        <P>A Marubozu is one of the strongest single-candle signals. It clearly shows that one side of the market was in complete control for the entire session. It can be used as an entry signal or as confirmation of a trend's strength.</P>
    </div>
);

export default Marubozu;
