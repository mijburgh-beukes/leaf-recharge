const batteryCapacity = 62;
const onePercentWatts = batteryCapacity / 100;
const eightyPercentWatts = onePercentWatts * 80;
const chargeRatePerHour = 6.6;

const timeTo80pc = (chargePC: number): string => {
  const wattsTo80pc = eightyPercentWatts - chargePC * onePercentWatts;
  const hoursTo80pc = wattsTo80pc / chargeRatePerHour;
  const minsTo80pc = hoursTo80pc * 60;
  const hours = Math.floor(minsTo80pc / 60);
  const mins = Math.floor(minsTo80pc - hours * 60);
  return `${hours}h ${mins} mins`;
};
