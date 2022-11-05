import { StripTypeClass } from "../constants/strip-type.enum";
import { HEIGHT_STRIP_LIST } from "../constants/common.consts";

export const initStripArray = (length: number) => {
  const step = (HEIGHT_STRIP_LIST * 2) / length;

  return Array.from({ length: length }, (_, index) => {
    return {
      height: ++index * step,
      typeClass: StripTypeClass.DEFAULT
    };
  });
};

export const createRandomStripArray = (length: number) => {
  const step = (HEIGHT_STRIP_LIST * 2) / length;

  return Array.from({ length: length }, (_, index) => {
    return {
      height: ++index * step,
      typeClass: StripTypeClass.DEFAULT
    };
  }).sort(() => Math.random() - 0.5);
};
