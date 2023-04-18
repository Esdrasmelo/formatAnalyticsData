import {
  insertSiglaPropertyOnObject,
  mountArrayWithTotalForEachState,
  objectsPropertyWithTotalProperty,
} from "./functions";
import cidades from "./jsons/cidade.json";
import topology from "./jsons/mapa_visual.json";
import * as fs from "fs";

const main = async () => {
  const usersByCityData = [
    {
      total: 5,
      city: "São Paulo",
      __typename: "UsersByCitySchema",
    },
    {
      total: 2,
      city: "Belo Horizonte",
      __typename: "UsersByCitySchema",
    },
    {
      total: 3,
      city: "Rio de Janeiro",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "Fortaleza",
      __typename: "UsersByCitySchema",
    },
    {
      total: 4,
      city: "Porto Alegre",
      __typename: "UsersByCitySchema",
    },
    {
      total: 2,
      city: "Recife",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "Curitiba",
      __typename: "UsersByCitySchema",
    },
    {
      total: 3,
      city: "Salvador",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "São Luís",
      __typename: "UsersByCitySchema",
    },
    {
      total: 2,
      city: "Brasília",
      __typename: "UsersByCitySchema",
    },
    {
      total: 3,
      city: "Natal",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "João Pessoa",
      __typename: "UsersByCitySchema",
    },
    {
      total: 2,
      city: "Vitória",
      __typename: "UsersByCitySchema",
    },
    {
      total: 4,
      city: "Belém",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "Goiânia",
      __typename: "UsersByCitySchema",
    },
    {
      total: 2,
      city: "Florianópolis",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "Maceió",
      __typename: "UsersByCitySchema",
    },
    {
      total: 3,
      city: "Campinas",
      __typename: "UsersByCitySchema",
    },
    {
      total: 1,
      city: "Uberlândia",
      __typename: "UsersByCitySchema",
    },
    {
      total: 2,
      city: "Teresina",
      __typename: "UsersByCitySchema",
    },
  ];

  const userByCityWithUFProperty = insertSiglaPropertyOnObject(usersByCityData);

  const UFs = cidades.estados.map((state) => state.sigla);

  const arrayWithTotalForEachState = mountArrayWithTotalForEachState(
    UFs,
    userByCityWithUFProperty
  );

  const topologyObject = topology;

  const { objects, ...rest } = topologyObject;

  const objectsWithTotalField = objectsPropertyWithTotalProperty(
    objects,
    arrayWithTotalForEachState
  );

  const formattedTopologyObject = {
    ...rest,
    objects: objectsWithTotalField,
  };

  fs.writeFileSync(
    "./src/jsons/formattedTopologyData.json",
    JSON.stringify(formattedTopologyObject)
  );

  return formattedTopologyObject;
};

main();
