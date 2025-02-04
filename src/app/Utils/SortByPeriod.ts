function sortByPeriod(arr?: any) {
  if (!arr) return [];
  return arr.sort((a: any, b: any) => {
    const { data: dataA } = a;
    const { data: dataB } = b;
    const [startA, endA] = dataA.period.split('-').map(Number);
    const [startB, endB] = dataB.period.split('-').map(Number);
    if (endA !== endB) {
      return endB - endA;
    }
    return startB - startA;
  });
}

export default sortByPeriod;
