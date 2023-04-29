export type HouseType = {
  label: string;
  value: string;
};

const houseTypes: HouseType[] = [
  {
    label: "HBD Flat",
    value: "hdb-flat",
  },
  {
    label: "Condominium",
    value: "condominium",
  },
  {
    label: "Landed",
    value: "landed",
  },
];

export default houseTypes;
