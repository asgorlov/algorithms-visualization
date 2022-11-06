import { StripTypeClass } from "../constants/strip-type.enum";
import { MAX_HEIGHT_STRIP } from "../constants/common.consts";

export const initStripArray = (length: number) => {
  const step = MAX_HEIGHT_STRIP / length;

  return Array.from({ length: length }, (_, index) => {
    return {
      height: ++index * step,
      typeClass: StripTypeClass.DEFAULT
    };
  });
};
