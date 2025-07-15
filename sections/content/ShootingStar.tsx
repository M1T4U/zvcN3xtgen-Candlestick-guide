import React from 'react';
import { ShootingStarCandle } from '../../components/Illustrations';
import { H1, H2, P, Term, Card } from './ui';

const ShootingStar: React.FC = () => (
    <div>
        <H1>Shooting Star</H1>
        <P>The Shooting Star is a single-candle <Term>bearish reversal</Term> pattern that appears at the top of an uptrend. It looks like an inverted Hammer.</P>
        <Card>
            <H2>Chart Illustration</H2>
            <P>It has a small body at the bottom and a long upper wick. This shows that buyers tried to push the price up, but sellers took control and forced the price back down to close near the open. A red body is more bearish, but not required.</P>
            <div className="flex justify-center my-4">
                <ShootingStarCandle />
            </div>
        </Card>
        <H2>Comparison with Inverted Hammer</H2>
        <P>Visually, a Shooting Star and an Inverted Hammer are identical. The key difference is the context. A <Term>Shooting Star</Term> occurs after an uptrend and is bearish. An <Term>Inverted Hammer</Term> occurs after a downtrend and is a potential bullish signal.</P>
    </div>
);

export default ShootingStar;
