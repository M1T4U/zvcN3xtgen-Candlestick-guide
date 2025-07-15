import React from 'react';
import { UptrendChart, DowntrendChart } from '../../components/Illustrations';
import { H2, P, Term, Card } from './ui';

const Introduction: React.FC = () => (
    <div>
        <h1 className="font-handwriting text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300 mb-8 typewriter-heading">
            Welcome to the Guide
        </h1>

        <p className="font-handwriting text-2xl text-slate-300 mb-4 leading-relaxed fade-in-delayed-1">This interactive guide is designed to help you master candlestick patterns, a fundamental skill for successful crypto trading. Understanding these patterns allows you to interpret market sentiment and make more informed decisions.</p>
        <p className="font-handwriting text-2xl text-slate-300 mb-6 leading-relaxed fade-in-delayed-2">Navigate through the sections using the sidebar to learn about each pattern's definition, visual characteristics, and strategic use cases. Finish with the quiz to test your knowledge.</p>

        <div className="fade-in-delayed-3">
            <Card>
                <H2>What are Candlesticks?</H2>
                <P>Each candlestick represents price action over a specific time period. It shows four key pieces of information: the <Term>open</Term>, <Term>high</Term>, <Term>low</Term>, and <Term>close</Term> prices.</P>
                <div className="grid md:grid-cols-2 gap-8">
                    <UptrendChart />
                    <DowntrendChart />
                </div>
                <P className="text-center mt-2">A <Term>green (bullish)</Term> candle means the price closed higher than it opened. A <Term>red (bearish)</Term> candle means the price closed lower than it opened.</P>
            </Card>
        </div>
    </div>
);

export default Introduction;
