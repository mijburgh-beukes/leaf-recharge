const batteryCapacity = 62;
const onePercentWatts = batteryCapacity / 100;
const eightyPercentWatts = onePercentWatts * 80;
const chargeRatePerHour = 6.6;

export const timeTo80pc = (charge: number): string => {
  const wattsTo80pc = eightyPercentWatts - charge * eightyPercentWatts;
  const hoursTo80pc = wattsTo80pc / chargeRatePerHour;
  const minsTo80pc = hoursTo80pc * 60;
  return minsTo80pc.toString();
};
