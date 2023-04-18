import { ICitiesWithSameSigla } from "../interfaces";

export const sumTotalForState = (
  UF: string,
  citiesWithSameUF?: ICitiesWithSameSigla[]
) => {
  const total = citiesWithSameUF?.reduce(
    (accumutalor, currentValue): any => accumutalor + currentValue?.total!,
    0
  );

  return {
    UF,
    total,
  };
};
