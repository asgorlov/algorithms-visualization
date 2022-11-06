import { StripTypeClass } from "../constants/strip-type.enum";

export interface StripModel {
  height?: number;
  typeClass?: StripTypeClass;
}

export interface ChangedStripModel extends StripModel {
  index: number;
}
