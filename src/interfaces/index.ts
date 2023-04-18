export interface IUsersByCity {
  total: number;
  city: string;
  __typename: string;
}

export interface IFormattedArray extends IUsersByCity {
  UF: string;
}

export interface ICitiesWithSameSigla extends IUsersByCity {}

export interface ITopologyGeometryWithTotalField {
  type: string;
  properties: {
    name: string;
  };
  id: string;
  arcs: number[][];
  total: number;
}

export interface ITotalForEachState {
  UF: string;
  total?: number;
}
