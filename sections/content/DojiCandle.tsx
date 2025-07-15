import React from 'react';
import { StandardDoji } from '../../components/Illustrations';
import { H1, H2, P, Term, Card, Ul } from './ui';

const DojiCandle: React.FC = () => (
    <div>
        <H1>Doji Candle</H1>
        <P>A Doji is a unique candle where the open and close prices are almost the same, resulting in a very small or non-existent body. It represents <Term>indecision or a potential turning point</Term> in the market.</P>
        <Card>
            <H2>Types of Doji</H2>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <StandardDoji />
                <div>
                    <Ul>
                        <li><Term>Standard Doji:</Term> Indicates pure indecision.</li>
                        <li><Term>Gravestone Doji:</Term> Upper wick, appears at tops, bearish.</li>
                        <li><Term>Dragonfly Doji:</Term> Lower wick, appears at bottoms, bullish.</li>
                        <li><Term>Long-Legged Doji:</Term> Long upper and lower wicks, extreme indecision.</li>
                    </Ul>
                </div>
            </div>
        </Card>
        <H2>How to Trade Using a Doji</H2>
        <P>A Doji is not a signal by itself. Its importance comes from the context of the preceding trend. A Doji after a long series of bullish candles may signal the uptrend is losing steam. Always wait for a <Term>confirmation candle</Term> before acting.</P>
    </div>
);

export default DojiCandle;
