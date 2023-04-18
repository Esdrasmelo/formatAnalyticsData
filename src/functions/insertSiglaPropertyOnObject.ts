import { IUsersByCity } from "../interfaces";
import cidades from "../jsons/cidade.json";

export const insertSiglaPropertyOnObject = (
  usersByCityArray: IUsersByCity[]
) => {
  const auxiliarArrary = [];

  for (let index = 0; index < usersByCityArray.length; index++) {
    for (let sIndex = 0; sIndex < cidades.estados.length; sIndex++) {
      for (
        let tIndex = 0;
        tIndex < cidades.estados[sIndex].cidades.length;
        tIndex++
      ) {
        if (
          cidades.estados[sIndex].cidades[tIndex] ===
          usersByCityArray[index].city
        ) {
          auxiliarArrary.push({
            ...usersByCityArray[index],
            UF: cidades.estados[sIndex].sigla,
          });
        }
      }
    }
  }

  return auxiliarArrary;
};
