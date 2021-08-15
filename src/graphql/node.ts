import gql from "graphql-tag";

export interface NodeModel {
  id: string;
  createdAt: string;
  createdById: string;
  updatedAt?: string;
  updatedById?: string;
  deletedAt?: string;
  deletedById?: string;
  version: number;
  gridVersion: number;
  nodeId: number;
  farmId: number;
  twinId: number;
  locationId: string;
  countryId?: number;
  cityId?: number;
  hru?: string;
  sru?: string;
  cru?: string;
  mru?: string;
  publicConfigId?: string;
}

const nodeBaseFragment = gql`
  fragment NodeBase on Node {
    id
    createdAt
    createdById
    updatedAt
    updatedById
    deletedAt
    deletedById
    version
    gridVersion
    nodeId
    farmId
    twinId
    locationId
    countryId
    cityId
    hru
    sru
    cru
    mru
    publicConfigId
  }
`;

export const nodesQuery = gql`
  ${nodeBaseFragment}
  query nodes($where: NodeWhereInput) {
    nodes(where: $where) {
      ...NodeBase
    }
  }
`;
