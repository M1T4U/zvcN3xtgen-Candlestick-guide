import React from 'react';
import { BullishEngulfing, BearishEngulfing } from '../../components/Illustrations';
import { H1, H2, P, Term, Card } from './ui';

const EngulfingCandle: React.FC = () => (
    <div>
        <H1>Engulfing Candle</H1>
        <P>The Engulfing pattern is a powerful two-candle reversal signal. It occurs when a larger candlestick "engulfs" the entire body of the previous, smaller candlestick.</P>
        <Card>
            <H2>Types of Engulfing Patterns</H2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Bullish Engulfing</h3>
                    <P>Appears in a downtrend. A small red candle is followed by a large green candle that engulfs it, signaling a potential <Term>upward reversal</Term>.</P>
                    <BullishEngulfing />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Bearish Engulfing</h3>
                    <P>Appears in an uptrend. A small green candle is followed by a large red candle that engulfs it, signaling a potential <Term>downward reversal</Term>.</P>
                    <BearishEngulfing />
                </div>
            </div>
        </Card>
        <H2>When to Use It</H2>
        <P>Look for engulfing patterns at the end of clear trends. Confirmation is key: wait for the next candle to close in the direction of the reversal before entering a trade. Higher volume on the engulfing candle adds to its significance.</P>
    </div>
);

export default EngulfingCandle;
