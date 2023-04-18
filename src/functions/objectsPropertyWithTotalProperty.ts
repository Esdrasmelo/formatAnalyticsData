import { ITotalForEachState } from "../interfaces";

export const objectsPropertyWithTotalProperty = (
  objectsProperty: any,
  arrayWithTotalForEachState: ITotalForEachState[]
) => {
  const objectsWithTotalField = objectsProperty;

  for (let index = 0; index < objectsProperty.bra.geometries.length; index++) {
    const { name: stateName } =
      objectsProperty.bra.geometries[index].properties;

    const sigla =
      stateName === "Acre"
        ? "AC"
        : stateName === "Rondônia"
        ? "RO"
        : objectsProperty.bra.geometries[index].id.split(".")[1];

    const totalForCurrentState = arrayWithTotalForEachState.find(
      (item) => item.UF === sigla
    );

    if (totalForCurrentState) {
      objectsWithTotalField.bra.geometries[index].total =
        totalForCurrentState.total;
    }
  }

  return objectsWithTotalField;
};
