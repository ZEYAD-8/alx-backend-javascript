export default function cleanSet(set, startString) {
  let str = '';

  if (startString === '') {
    return '';
  }
  for (const item of set) {
    if (set instanceof Set && typeof startString === 'string') {
      if (item && item.startsWith(startString)) {
        const strSlice = item.slice(startString.length);
        if (str !== '') {
          str += '-';
        }
        str += strSlice;
      }
    }
  }

  return str;
}
