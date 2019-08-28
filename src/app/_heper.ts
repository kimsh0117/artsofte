interface iterateeProps {
  start: number;
  count: number;
  option?: any;
}

export function iteratee<T = any>({ start, count, option }: iterateeProps) {
  let array: T[] = [],
    i;
  for (i = start; i < count; i += 1) {
    if (!option) {
      array.push(i);
    } else {
      array.push((option += 1));
    }
  }
  return array;
}
