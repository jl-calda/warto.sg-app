export type RoomType = {
  label: string;
  value: string;
};

const roomTypes: RoomType[] = [
  {
    label: "Common Room",
    value: "common-room",
  },
  {
    label: "Masters Bedroom",
    value: "masters-bedroom",
  },
  {
    label: "Sharing Room",
    value: "sharing-room",
  },
  {
    label: "Solo Room",
    value: "solo-room",
  },
  {
    label: "Study Room",
    value: "study-room",
  },
  {
    label: "Entire Unit",
    value: "entire-unit",
  },
];

export default roomTypes;
