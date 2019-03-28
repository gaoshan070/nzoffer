export function arrayToString(input: (string | number)[]): string {
  if (!Array.isArray(input)) return '';
  if (!input.length) return '';

  let result = '';
  input.forEach(str => {
    result += `${str}, `;
  });
  result = result.slice(0, -2);
  return result;
}

export function stringToArray(input: string): string[] {
  return input.replace(/\s/g, '').split(',');
}

export function removeSpacesInStr(v: string) {
  return v.replace(/\s/g, '');
}
