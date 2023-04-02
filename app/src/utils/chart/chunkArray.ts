export const chunkArray = <T>(arr: Array<T>, chunkSize: number): T[][] => {
  return arr.reduce((chunks: T[][], el: T, i: number) => {
    if (i % chunkSize === 0) {
      chunks.push([el]);
    } else {
      chunks[chunks.length - 1].push(el);
    }
    return chunks;
  }, []);
};
