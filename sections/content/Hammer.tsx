import React from 'react';
import { HammerCandle } from '../../components/Illustrations';
import { H1, H2, P, Term, Card } from './ui';

const Hammer: React.FC = () => (
    <div>
        <H1>Hammer</H1>
        <P>The Hammer is a single-candle <Term>bullish reversal</Term> pattern that appears at the bottom of a downtrend. It's characterized by a long lower wick and a small body at the top.</P>
        <Card>
            <H2>Visual Diagram</H2>
            <P>The long lower wick signifies that sellers pushed the price down, but buyers stepped in forcefully to close the price near its open. The color of the body can be green or red, but a green body is considered slightly more bullish.</P>
            <div className="flex justify-center my-4">
                <HammerCandle />
            </div>
        </Card>
        <H2>Confirmation Tips</H2>
        <P>A true Hammer pattern should be confirmed by the next candle. A strong confirmation would be a green candle that closes above the high of the Hammer candle. Increased volume on the Hammer and confirmation candles adds to the signal's strength.</P>
    </div>
);

export default Hammer;
