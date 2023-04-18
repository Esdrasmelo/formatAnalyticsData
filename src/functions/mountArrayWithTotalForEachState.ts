import { IFormattedArray } from "../interfaces";
import { sumTotalForState } from "./sumTotalForState";

export const mountArrayWithTotalForEachState = (
    UFs: string[],
    userByCityWithUFProperty: IFormattedArray[]
  ) => {
    const finalArray = [];
  
    for (let index = 0; index < UFs.length; index++) {
      const cities_with_same_UF: any = userByCityWithUFProperty
        .map((item) => {
          if (item.UF === UFs[index]) {
            return {
              UF: UFs[index],
              total: item.total,
              city: item.city,
            };
          }
        })
        .filter((data) => data !== undefined);
  
      if (cities_with_same_UF.length) {
        const UF = cities_with_same_UF[0].UF;
        const totalForCurrentState = sumTotalForState(UF, cities_with_same_UF);
  
        finalArray.push(totalForCurrentState);
      }
    }
  
    return finalArray;
  };