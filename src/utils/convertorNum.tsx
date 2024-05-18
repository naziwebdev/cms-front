export function convertToLatinNumber(persianNumber: any) {
  const numMapping: any = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  const latinNumber = persianNumber.replace(
    /[۰-۹]/g,
    (match: number | string) => numMapping[match],
  );

  return latinNumber;
}
