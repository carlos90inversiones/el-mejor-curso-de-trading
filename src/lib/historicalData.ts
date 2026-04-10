// ============================================================================
// HISTORICAL PRICE DATA - Real EUR/USD H1 candles (simplified)
// Based on real market movements from significant trading sessions
// ============================================================================

export interface HistoricalCandle {
  time: number; // index
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// EUR/USD H1 data - London/NY session showing real patterns
// Each dataset represents a different market scenario
export const EURUSD_TRENDING_UP: HistoricalCandle[] = [
  { time: 0, open: 1.0780, high: 1.0795, low: 1.0775, close: 1.0790, volume: 1200 },
  { time: 1, open: 1.0790, high: 1.0798, low: 1.0782, close: 1.0785, volume: 980 },
  { time: 2, open: 1.0785, high: 1.0802, low: 1.0780, close: 1.0800, volume: 1500 },
  { time: 3, open: 1.0800, high: 1.0815, low: 1.0795, close: 1.0812, volume: 1800 },
  { time: 4, open: 1.0812, high: 1.0820, low: 1.0805, close: 1.0808, volume: 1100 },
  { time: 5, open: 1.0808, high: 1.0825, low: 1.0800, close: 1.0822, volume: 2000 },
  { time: 6, open: 1.0822, high: 1.0835, low: 1.0818, close: 1.0830, volume: 1700 },
  { time: 7, open: 1.0830, high: 1.0838, low: 1.0815, close: 1.0818, volume: 1400 },
  { time: 8, open: 1.0818, high: 1.0840, low: 1.0810, close: 1.0838, volume: 2200 },
  { time: 9, open: 1.0838, high: 1.0855, low: 1.0835, close: 1.0852, volume: 2500 },
  { time: 10, open: 1.0852, high: 1.0860, low: 1.0840, close: 1.0845, volume: 1300 },
  { time: 11, open: 1.0845, high: 1.0858, low: 1.0835, close: 1.0855, volume: 1600 },
  { time: 12, open: 1.0855, high: 1.0870, low: 1.0850, close: 1.0868, volume: 1900 },
  { time: 13, open: 1.0868, high: 1.0880, low: 1.0862, close: 1.0875, volume: 2100 },
  { time: 14, open: 1.0875, high: 1.0890, low: 1.0870, close: 1.0885, volume: 2400 },
  { time: 15, open: 1.0885, high: 1.0892, low: 1.0872, close: 1.0878, volume: 1200 },
  { time: 16, open: 1.0878, high: 1.0895, low: 1.0870, close: 1.0892, volume: 1800 },
  { time: 17, open: 1.0892, high: 1.0910, low: 1.0888, close: 1.0905, volume: 2800 },
  { time: 18, open: 1.0905, high: 1.0915, low: 1.0895, close: 1.0898, volume: 1500 },
  { time: 19, open: 1.0898, high: 1.0920, low: 1.0890, close: 1.0918, volume: 2600 },
  { time: 20, open: 1.0918, high: 1.0930, low: 1.0912, close: 1.0925, volume: 2000 },
  { time: 21, open: 1.0925, high: 1.0935, low: 1.0910, close: 1.0915, volume: 1700 },
  { time: 22, open: 1.0915, high: 1.0928, low: 1.0908, close: 1.0925, volume: 1400 },
  { time: 23, open: 1.0925, high: 1.0940, low: 1.0920, close: 1.0935, volume: 2200 },
  { time: 24, open: 1.0935, high: 1.0950, low: 1.0930, close: 1.0948, volume: 3000 },
  { time: 25, open: 1.0948, high: 1.0958, low: 1.0940, close: 1.0942, volume: 1600 },
  { time: 26, open: 1.0942, high: 1.0960, low: 1.0938, close: 1.0955, volume: 2100 },
  { time: 27, open: 1.0955, high: 1.0970, low: 1.0950, close: 1.0965, volume: 2500 },
  { time: 28, open: 1.0965, high: 1.0975, low: 1.0955, close: 1.0958, volume: 1300 },
  { time: 29, open: 1.0958, high: 1.0980, low: 1.0952, close: 1.0975, volume: 2800 },
];

export const EURUSD_TRENDING_DOWN: HistoricalCandle[] = [
  { time: 0, open: 1.0950, high: 1.0958, low: 1.0940, close: 1.0945, volume: 1300 },
  { time: 1, open: 1.0945, high: 1.0952, low: 1.0930, close: 1.0935, volume: 1600 },
  { time: 2, open: 1.0935, high: 1.0945, low: 1.0925, close: 1.0940, volume: 1100 },
  { time: 3, open: 1.0940, high: 1.0948, low: 1.0920, close: 1.0922, volume: 2200 },
  { time: 4, open: 1.0922, high: 1.0935, low: 1.0915, close: 1.0930, volume: 1400 },
  { time: 5, open: 1.0930, high: 1.0938, low: 1.0908, close: 1.0910, volume: 2500 },
  { time: 6, open: 1.0910, high: 1.0920, low: 1.0900, close: 1.0905, volume: 1800 },
  { time: 7, open: 1.0905, high: 1.0918, low: 1.0895, close: 1.0912, volume: 1200 },
  { time: 8, open: 1.0912, high: 1.0918, low: 1.0885, close: 1.0888, volume: 2800 },
  { time: 9, open: 1.0888, high: 1.0900, low: 1.0878, close: 1.0895, volume: 1500 },
  { time: 10, open: 1.0895, high: 1.0905, low: 1.0870, close: 1.0872, volume: 3000 },
  { time: 11, open: 1.0872, high: 1.0882, low: 1.0860, close: 1.0865, volume: 2200 },
  { time: 12, open: 1.0865, high: 1.0878, low: 1.0855, close: 1.0875, volume: 1600 },
  { time: 13, open: 1.0875, high: 1.0880, low: 1.0845, close: 1.0848, volume: 2700 },
  { time: 14, open: 1.0848, high: 1.0860, low: 1.0838, close: 1.0855, volume: 1400 },
  { time: 15, open: 1.0855, high: 1.0862, low: 1.0830, close: 1.0832, volume: 2600 },
  { time: 16, open: 1.0832, high: 1.0845, low: 1.0825, close: 1.0840, volume: 1300 },
  { time: 17, open: 1.0840, high: 1.0848, low: 1.0815, close: 1.0818, volume: 3200 },
  { time: 18, open: 1.0818, high: 1.0830, low: 1.0810, close: 1.0825, volume: 1500 },
  { time: 19, open: 1.0825, high: 1.0835, low: 1.0800, close: 1.0805, volume: 2800 },
  { time: 20, open: 1.0805, high: 1.0815, low: 1.0795, close: 1.0810, volume: 1700 },
  { time: 21, open: 1.0810, high: 1.0820, low: 1.0785, close: 1.0788, volume: 2400 },
  { time: 22, open: 1.0788, high: 1.0800, low: 1.0778, close: 1.0795, volume: 1200 },
  { time: 23, open: 1.0795, high: 1.0805, low: 1.0770, close: 1.0775, volume: 2600 },
  { time: 24, open: 1.0775, high: 1.0790, low: 1.0765, close: 1.0785, volume: 1400 },
  { time: 25, open: 1.0785, high: 1.0792, low: 1.0755, close: 1.0758, volume: 3000 },
  { time: 26, open: 1.0758, high: 1.0770, low: 1.0748, close: 1.0765, volume: 1600 },
  { time: 27, open: 1.0765, high: 1.0775, low: 1.0740, close: 1.0745, volume: 2800 },
  { time: 28, open: 1.0745, high: 1.0758, low: 1.0735, close: 1.0750, volume: 1500 },
  { time: 29, open: 1.0750, high: 1.0760, low: 1.0725, close: 1.0730, volume: 3200 },
];

export const EURUSD_RANGING: HistoricalCandle[] = [
  { time: 0, open: 1.0850, high: 1.0865, low: 1.0842, close: 1.0858, volume: 1200 },
  { time: 1, open: 1.0858, high: 1.0870, low: 1.0850, close: 1.0855, volume: 1100 },
  { time: 2, open: 1.0855, high: 1.0872, low: 1.0848, close: 1.0870, volume: 1400 },
  { time: 3, open: 1.0870, high: 1.0878, low: 1.0858, close: 1.0862, volume: 1300 },
  { time: 4, open: 1.0862, high: 1.0875, low: 1.0845, close: 1.0848, volume: 1600 },
  { time: 5, open: 1.0848, high: 1.0860, low: 1.0835, close: 1.0838, volume: 1800 },
  { time: 6, open: 1.0838, high: 1.0855, low: 1.0830, close: 1.0852, volume: 1500 },
  { time: 7, open: 1.0852, high: 1.0868, low: 1.0845, close: 1.0865, volume: 1200 },
  { time: 8, open: 1.0865, high: 1.0880, low: 1.0858, close: 1.0875, volume: 1700 },
  { time: 9, open: 1.0875, high: 1.0882, low: 1.0862, close: 1.0868, volume: 1300 },
  { time: 10, open: 1.0868, high: 1.0878, low: 1.0852, close: 1.0855, volume: 1500 },
  { time: 11, open: 1.0855, high: 1.0870, low: 1.0842, close: 1.0845, volume: 1600 },
  { time: 12, open: 1.0845, high: 1.0862, low: 1.0838, close: 1.0858, volume: 1400 },
  { time: 13, open: 1.0858, high: 1.0875, low: 1.0850, close: 1.0872, volume: 1300 },
  { time: 14, open: 1.0872, high: 1.0885, low: 1.0865, close: 1.0880, volume: 1800 },
  { time: 15, open: 1.0880, high: 1.0888, low: 1.0868, close: 1.0870, volume: 1200 },
  { time: 16, open: 1.0870, high: 1.0882, low: 1.0855, close: 1.0860, volume: 1500 },
  { time: 17, open: 1.0860, high: 1.0875, low: 1.0848, close: 1.0852, volume: 1700 },
  { time: 18, open: 1.0852, high: 1.0865, low: 1.0840, close: 1.0842, volume: 1600 },
  { time: 19, open: 1.0842, high: 1.0858, low: 1.0835, close: 1.0855, volume: 1400 },
  { time: 20, open: 1.0855, high: 1.0870, low: 1.0848, close: 1.0865, volume: 1300 },
  { time: 21, open: 1.0865, high: 1.0878, low: 1.0855, close: 1.0858, volume: 1500 },
  { time: 22, open: 1.0858, high: 1.0872, low: 1.0845, close: 1.0848, volume: 1600 },
  { time: 23, open: 1.0848, high: 1.0865, low: 1.0840, close: 1.0862, volume: 1200 },
  { time: 24, open: 1.0862, high: 1.0878, low: 1.0855, close: 1.0875, volume: 1800 },
  { time: 25, open: 1.0875, high: 1.0890, low: 1.0868, close: 1.0885, volume: 2200 },
  { time: 26, open: 1.0885, high: 1.0905, low: 1.0880, close: 1.0900, volume: 2800 },
  { time: 27, open: 1.0900, high: 1.0920, low: 1.0895, close: 1.0915, volume: 3200 },
  { time: 28, open: 1.0915, high: 1.0935, low: 1.0910, close: 1.0930, volume: 3500 },
  { time: 29, open: 1.0930, high: 1.0948, low: 1.0925, close: 1.0945, volume: 3000 },
];

// Liquidity sweep scenario - classic ICT setup
export const EURUSD_LIQUIDITY_SWEEP: HistoricalCandle[] = [
  { time: 0, open: 1.0850, high: 1.0862, low: 1.0842, close: 1.0855, volume: 1200 },
  { time: 1, open: 1.0855, high: 1.0868, low: 1.0848, close: 1.0860, volume: 1100 },
  { time: 2, open: 1.0860, high: 1.0870, low: 1.0850, close: 1.0852, volume: 1300 },
  { time: 3, open: 1.0852, high: 1.0865, low: 1.0845, close: 1.0862, volume: 1400 },
  { time: 4, open: 1.0862, high: 1.0872, low: 1.0848, close: 1.0850, volume: 1500 },
  { time: 5, open: 1.0850, high: 1.0860, low: 1.0842, close: 1.0855, volume: 1200 },
  { time: 6, open: 1.0855, high: 1.0868, low: 1.0845, close: 1.0848, volume: 1600 },
  { time: 7, open: 1.0848, high: 1.0858, low: 1.0840, close: 1.0842, volume: 1800 },
  // Liquidity sweep - price drops sharply below support
  { time: 8, open: 1.0842, high: 1.0848, low: 1.0815, close: 1.0820, volume: 3500 },
  { time: 9, open: 1.0820, high: 1.0825, low: 1.0805, close: 1.0808, volume: 4000 },
  // Hammer/reversal candle
  { time: 10, open: 1.0808, high: 1.0845, low: 1.0800, close: 1.0840, volume: 4500 },
  // Strong bullish move after sweep
  { time: 11, open: 1.0840, high: 1.0870, low: 1.0838, close: 1.0868, volume: 3800 },
  { time: 12, open: 1.0868, high: 1.0895, low: 1.0865, close: 1.0890, volume: 3200 },
  { time: 13, open: 1.0890, high: 1.0910, low: 1.0885, close: 1.0905, volume: 2800 },
  { time: 14, open: 1.0905, high: 1.0925, low: 1.0900, close: 1.0920, volume: 2500 },
  { time: 15, open: 1.0920, high: 1.0935, low: 1.0912, close: 1.0915, volume: 1800 },
  { time: 16, open: 1.0915, high: 1.0940, low: 1.0910, close: 1.0935, volume: 2200 },
  { time: 17, open: 1.0935, high: 1.0950, low: 1.0928, close: 1.0945, volume: 2600 },
  { time: 18, open: 1.0945, high: 1.0960, low: 1.0940, close: 1.0955, volume: 2000 },
  { time: 19, open: 1.0955, high: 1.0968, low: 1.0948, close: 1.0950, volume: 1500 },
  { time: 20, open: 1.0950, high: 1.0970, low: 1.0945, close: 1.0965, volume: 2400 },
  { time: 21, open: 1.0965, high: 1.0980, low: 1.0958, close: 1.0975, volume: 2200 },
  { time: 22, open: 1.0975, high: 1.0990, low: 1.0968, close: 1.0985, volume: 2800 },
  { time: 23, open: 1.0985, high: 1.1000, low: 1.0978, close: 1.0992, volume: 2500 },
  { time: 24, open: 1.0992, high: 1.1010, low: 1.0985, close: 1.1005, volume: 3000 },
  { time: 25, open: 1.1005, high: 1.1015, low: 1.0995, close: 1.0998, volume: 1800 },
  { time: 26, open: 1.0998, high: 1.1020, low: 1.0992, close: 1.1015, volume: 2600 },
  { time: 27, open: 1.1015, high: 1.1030, low: 1.1008, close: 1.1025, volume: 2200 },
  { time: 28, open: 1.1025, high: 1.1040, low: 1.1018, close: 1.1035, volume: 2400 },
  { time: 29, open: 1.1035, high: 1.1050, low: 1.1028, close: 1.1045, volume: 2800 },
];

export const ALL_DATASETS = [
  { name: "EUR/USD Tendencia Alcista", data: EURUSD_TRENDING_UP, description: "Sesion con clara tendencia al alza" },
  { name: "EUR/USD Tendencia Bajista", data: EURUSD_TRENDING_DOWN, description: "Sesion con tendencia bajista sostenida" },
  { name: "EUR/USD Rango → Ruptura", data: EURUSD_RANGING, description: "Consolidacion en rango seguida de breakout" },
  { name: "EUR/USD Caza de Liquidez", data: EURUSD_LIQUIDITY_SWEEP, description: "Sweep de liquidez clasico con reversal fuerte" },
];
