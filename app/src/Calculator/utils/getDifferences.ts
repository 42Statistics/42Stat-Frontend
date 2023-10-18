export const getDifferences = (arr: number[]) => {
  if (arr.length === 0) {
    return [];
  }
  const differences = [arr[0]];
  for (let i = 0; i < arr.length - 1; i++) {
    differences.push(arr[i + 1] - arr[i]);
  }
  return differences;
};
