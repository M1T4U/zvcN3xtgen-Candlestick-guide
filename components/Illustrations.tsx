import React from 'react';

// Reusable components for building charts

interface MicroCandleProps {
  type: 'green' | 'red' | 'doji';
  body: number;
  wickTop?: number;
  wickBottom?: number;
  highlight?: boolean;
  left: number; // position from left in %
  bottom: number; // position from bottom in px
}

const MicroCandle: React.FC<MicroCandleProps> = ({ type, body, wickTop = 0, wickBottom = 0, highlight = false, left, bottom }) => {
  const colors = {
    green: { body: '#22c55e', wick: '#4ade80' },
    red: { body: '#ef4444', wick: '#f87171' },
    doji: { body: '#9ca3af', wick: '#9ca3af' },
  };
  const color = colors[type];
  const highlightClass = highlight 
    ? 'opacity-100 group-hover:scale-110' 
    : 'opacity-60 group-hover:opacity-90 group-hover:scale-105';

  return (
    <div 
      className={`absolute flex flex-col items-center transition-all duration-300 transform ${highlightClass}`}
      style={{ left: `${left}%`, bottom: `${bottom}px`, transform: 'translateX(-50%)' }}
    >
      <div style={{ height: `${wickTop}px`, width: '2px', backgroundColor: color.wick }}></div>
      <div style={{ height: `${body}px`, minHeight: '1px', width: '12px', backgroundColor: color.body }} className="rounded-sm"></div>
      <div style={{ height: `${wickBottom}px`, width: '2px', backgroundColor: color.wick }}></div>
    </div>
  );
};

const ChartContainer: React.FC<{ children: React.ReactNode, description: string }> = ({ children, description }) => (
  <div className="mt-4 group">
    <div className="relative w-full h-[160px] p-2 bg-blue-950/40 rounded-lg border border-blue-800/50">
      {children}
    </div>
    <p className="text-center text-xs text-blue-300/70 mt-2 px-2">{description}</p>
  </div>
);


// --- Chart Illustrations ---

export const UptrendChart: React.FC = () => (
  <ChartContainer description="A bullish uptrend is characterized by a series of higher highs and higher lows.">
    <MicroCandle type="green" left={10} bottom={10} body={20} wickTop={5} wickBottom={5} />
    <MicroCandle type="green" left={22} bottom={30} body={25} wickTop={5} wickBottom={8} />
    <MicroCandle type="red" left={34} bottom={50} body={10} wickTop={5} wickBottom={5} />
    <MicroCandle type="green" left={46} bottom={45} body={30} wickTop={10} wickBottom={5} />
    <MicroCandle type="green" left={58} bottom={75} body={35} wickTop={8} wickBottom={10} />
    <MicroCandle type="doji" left={70} bottom={110} body={2} wickTop={15} wickBottom={15} />
    <MicroCandle type="green" left={82} bottom={112} body={40} wickTop={5} wickBottom={5} />
  </ChartContainer>
);

export const DowntrendChart: React.FC = () => (
  <ChartContainer description="A bearish downtrend is characterized by a series of lower highs and lower lows.">
    <MicroCandle type="red" left={10} bottom={110} body={20} wickTop={5} wickBottom={5} />
    <MicroCandle type="red" left={22} bottom={85} body={25} wickTop={8} wickBottom={5} />
    <MicroCandle type="green" left={34} bottom={80} body={10} wickTop={5} wickBottom={5} />
    <MicroCandle type="red" left={46} bottom={50} body={30} wickTop={5} wickBottom={10} />
    <MicroCandle type="red" left={58} bottom={20} body={35} wickTop={10} wickBottom={8} />
    <MicroCandle type="doji" left={70} bottom={10} body={2} wickTop={15} wickBottom={15} />
    <MicroCandle type="red" left={82} bottom={10} body={40} wickTop={5} wickBottom={5} />
  </ChartContainer>
);

export const BullishEngulfing: React.FC = () => (
  <ChartContainer description="A downtrend followed by a large green candle engulfing a small red one.">
    <MicroCandle type="red" left={10} bottom={90} body={25} />
    <MicroCandle type="red" left={22} bottom={65} body={25} />
    <MicroCandle type="red" left={34} bottom={40} body={25} />
    <MicroCandle type="red" left={46} bottom={30} body={15} highlight />
    <MicroCandle type="green" left={58} bottom={25} body={40} highlight />
    <MicroCandle type="green" left={70} bottom={65} body={30} />
    <MicroCandle type="green" left={82} bottom={95} body={35} />
  </ChartContainer>
);

export const BearishEngulfing: React.FC = () => (
  <ChartContainer description="An uptrend followed by a large red candle engulfing a small green one.">
    <MicroCandle type="green" left={10} bottom={20} body={25} />
    <MicroCandle type="green" left={22} bottom={45} body={25} />
    <MicroCandle type="green" left={34} bottom={70} body={25} />
    <MicroCandle type="green" left={46} bottom={95} body={15} highlight />
    <MicroCandle type="red" left={58} bottom={75} body={40} highlight />
    <MicroCandle type="red" left={70} bottom={45} body={30} />
    <MicroCandle type="red" left={82} bottom={15} body={35} />
  </ChartContainer>
);

export const HammerCandle: React.FC = () => (
  <ChartContainer description="A Hammer forms at the bottom of a downtrend, signaling a potential bullish reversal.">
    <MicroCandle type="red" left={10} bottom={80} body={30} />
    <MicroCandle type="red" left={22} bottom={50} body={30} />
    <MicroCandle type="red" left={34} bottom={30} body={20} />
    <MicroCandle type="green" highlight left={48} bottom={10} body={10} wickBottom={30} />
    <MicroCandle type="green" left={60} bottom={45} body={25} />
    <MicroCandle type="green" left={72} bottom={70} body={30} />
    <MicroCandle type="green" left={84} bottom={100} body={25} />
  </ChartContainer>
);

export const ShootingStarCandle: React.FC = () => (
  <ChartContainer description="A Shooting Star forms at the top of an uptrend, signaling a potential bearish reversal.">
    <MicroCandle type="green" left={10} bottom={20} body={30} />
    <MicroCandle type="green" left={22} bottom={50} body={30} />
    <MicroCandle type="green" left={34} bottom={80} body={20} />
    <MicroCandle type="red" highlight left={48} bottom={100} body={10} wickTop={30} />
    <MicroCandle type="red" left={60} bottom={65} body={25} />
    <MicroCandle type="red" left={72} bottom={40} body={30} />
    <MicroCandle type="red" left={84} bottom={10} body={25} />
  </ChartContainer>
);

export const TweezerBottom: React.FC = () => (
  <ChartContainer description="Two candles with matching lows at the bottom of a downtrend, signaling support.">
    <MicroCandle type="red" left={10} bottom={80} body={20} />
    <MicroCandle type="red" left={22} bottom={55} body={25} />
    <MicroCandle type="red" left={34} bottom={20} body={35} wickBottom={10} highlight />
    <MicroCandle type="green" left={46} bottom={20} body={30} wickBottom={10} highlight />
    <MicroCandle type="green" left={58} bottom={50} body={25} />
    <MicroCandle type="green" left={70} bottom={75} body={30} />
    <MicroCandle type="green" left={82} bottom={105} body={20} />
  </ChartContainer>
);

export const TweezerTop: React.FC = () => (
    <ChartContainer description="Two candles with matching highs at the top of an uptrend, signaling resistance.">
      <MicroCandle type="green" left={10} bottom={20} body={25} />
      <MicroCandle type="green" left={22} bottom={45} body={30} />
      <MicroCandle type="green" left={34} bottom={75} body={35} wickTop={10} highlight />
      <MicroCandle type="red" left={46} bottom={80} body={30} wickTop={10} highlight />
      <MicroCandle type="red" left={58} bottom={50} body={25} />
      <MicroCandle type="red" left={70} bottom={25} body={30} />
      <MicroCandle type="red" left={82} bottom={10} body={15} />
    </ChartContainer>
);

export const BullishMarubozu: React.FC = () => (
    <ChartContainer description="A strong green candle with no wicks, showing extreme buying pressure.">
        <MicroCandle type="red" left={10} bottom={35} body={15} />
        <MicroCandle type="doji" left={22} bottom={30} body={2} wickTop={10} wickBottom={10} />
        <MicroCandle type="green" left={34} bottom={28} body={15} />
        <MicroCandle type="green" highlight left={46} bottom={43} body={70} />
        <MicroCandle type="green" left={58} bottom={113} body={20} />
        <MicroCandle type="red" left={70} bottom={108} body={10} />
        <MicroCandle type="green" left={82} bottom={118} body={25} />
    </ChartContainer>
);

export const BearishMarubozu: React.FC = () => (
    <ChartContainer description="A strong red candle with no wicks, showing extreme selling pressure.">
        <MicroCandle type="green" left={10} bottom={90} body={15} />
        <MicroCandle type="doji" left={22} bottom={95} body={2} wickTop={10} wickBottom={10} />
        <MicroCandle type="red" left={34} bottom={93} body={15} />
        <MicroCandle type="red" highlight left={46} bottom={23} body={70} />
        <MicroCandle type="red" left={58} bottom={10} body={13} />
        <MicroCandle type="green" left={70} bottom={10} body={15} />
        <MicroCandle type="red" left={82} bottom={5} body={20} />
    </ChartContainer>
);

export const MorningStar: React.FC = () => (
    <ChartContainer description="A bullish reversal pattern: a large red candle, a small indecisive one, then a large green candle.">
        <MicroCandle type="red" left={10} bottom={90} body={30}/>
        <MicroCandle type="red" left={22} bottom={50} body={40} highlight />
        <MicroCandle type="doji" left={34} bottom={35} body={5} wickTop={5} wickBottom={5} highlight/>
        <MicroCandle type="green" left={46} bottom={45} body={40} highlight/>
        <MicroCandle type="green" left={58} bottom={85} body={30}/>
        <MicroCandle type="green" left={70} bottom={115} body={25}/>
        <MicroCandle type="green" left={82} bottom={140} body={15}/>
    </ChartContainer>
);

export const EveningStar: React.FC = () => (
    <ChartContainer description="A bearish reversal pattern: a large green candle, a small indecisive one, then a large red candle.">
        <MicroCandle type="green" left={10} bottom={20} body={30}/>
        <MicroCandle type="green" left={22} bottom={50} body={40} highlight />
        <MicroCandle type="doji" left={34} bottom={100} body={5} wickTop={5} wickBottom={5} highlight/>
        <MicroCandle type="red" left={46} bottom={55} body={40} highlight/>
        <MicroCandle type="red" left={58} bottom={25} body={30}/>
        <MicroCandle type="red" left={70} bottom={10} body={15}/>
        <MicroCandle type="red" left={82} bottom={5} body={5}/>
    </ChartContainer>
);

export const ThreeWhiteSoldiers: React.FC = () => (
    <ChartContainer description="Three consecutive green candles closing progressively higher, signaling a strong bullish reversal.">
        <MicroCandle type="red" left={10} bottom={60} body={25} />
        <MicroCandle type="red" left={22} bottom={30} body={30} />
        <MicroCandle type="green" highlight left={34} bottom={30} body={35} wickTop={5} />
        <MicroCandle type="green" highlight left={46} bottom={65} body={40} wickTop={5} />
        <MicroCandle type="green" highlight left={58} bottom={105} body={45} wickTop={5} />
        <MicroCandle type="green" left={70} bottom={150} body={15} />
        <MicroCandle type="red" left={82} bottom={145} body={10} />
    </ChartContainer>
);

export const ThreeBlackCrows: React.FC = () => (
    <ChartContainer description="Three consecutive red candles closing progressively lower, signaling a strong bearish reversal.">
        <MicroCandle type="green" left={10} bottom={30} body={25} />
        <MicroCandle type="green" left={22} bottom={55} body={30} />
        <MicroCandle type="red" highlight left={34} bottom={85} body={35} wickBottom={5} />
        <MicroCandle type="red" highlight left={46} bottom={50} body={40} wickBottom={5} />
        <MicroCandle type="red" highlight left={58} bottom={10} body={45} wickBottom={5} />
        <MicroCandle type="red" left={70} bottom={5} body={15} />
        <MicroCandle type="green" left={82} bottom={5} body={10} />
    </ChartContainer>
);


// Keep old exports for any components that might still use them, but they are deprecated.
// In a real project, you would remove these once all usages are updated.
export const BullishCandle: React.FC = () => <UptrendChart />;
export const BearishCandle: React.FC = () => <DowntrendChart />;
export const StandardDoji: React.FC = () => (
    <ChartContainer description="A Doji represents market indecision.">
      <MicroCandle type="doji" left={50} bottom={50} body={2} wickTop={30} wickBottom={30} highlight />
    </ChartContainer>
);