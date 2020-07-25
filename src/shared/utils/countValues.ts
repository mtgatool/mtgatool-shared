export default function countValues<D>(array: D[], value: D): number {
  let count = 0;
  array.forEach((v) => {
    if (v == value) count++;
  });
  return count;
}
