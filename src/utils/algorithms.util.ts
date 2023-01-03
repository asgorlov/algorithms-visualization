import { StripTypeClass } from "../constants/strip-type.enum";
import { MAX_HEIGHT_STRIP } from "../constants/common.consts";
import { StripModel } from "../models/strip.model";
import { ComplexityModel } from "../models/complexity.model";
import { SortTypes } from "../constants/sort-type.enum";
import {
  CONST_COMPLEXITY,
  LINEAR_COMPLEXITY,
  LINEAR_LOGARITHMIC_COMPLEXITY,
  QUADRATIC_COMPLEXITY
} from "../constants/complexity.consts";

export const initStripArray = (length: number): StripModel[] => {
  const step = MAX_HEIGHT_STRIP / length;

  return Array.from({ length: length }, (_, index) => {
    return {
      height: ++index * step,
      typeClass: StripTypeClass.DEFAULT
    };
  });
};

export const getComplexity = (sortType: SortTypes): ComplexityModel => {
  switch (sortType) {
    case SortTypes.BUBBLE:
      return {
        average: QUADRATIC_COMPLEXITY,
        best: LINEAR_COMPLEXITY,
        worst: QUADRATIC_COMPLEXITY,
        space: CONST_COMPLEXITY
      };
    case SortTypes.QUICK:
      return {
        average: LINEAR_LOGARITHMIC_COMPLEXITY,
        best: LINEAR_LOGARITHMIC_COMPLEXITY,
        worst: QUADRATIC_COMPLEXITY,
        space: LINEAR_COMPLEXITY
      };
    case SortTypes.MERGE:
      return {
        average: LINEAR_LOGARITHMIC_COMPLEXITY,
        best: LINEAR_LOGARITHMIC_COMPLEXITY,
        worst: LINEAR_LOGARITHMIC_COMPLEXITY,
        space: LINEAR_COMPLEXITY
      };
    case SortTypes.HEAP:
      return {
        average: LINEAR_LOGARITHMIC_COMPLEXITY,
        best: LINEAR_LOGARITHMIC_COMPLEXITY,
        worst: LINEAR_LOGARITHMIC_COMPLEXITY,
        space: CONST_COMPLEXITY
      };
    case SortTypes.SELECTION:
    case SortTypes.PANCAKE:
      return {
        average: QUADRATIC_COMPLEXITY,
        best: QUADRATIC_COMPLEXITY,
        worst: QUADRATIC_COMPLEXITY,
        space: CONST_COMPLEXITY
      };
    case SortTypes.INSERTION:
    case SortTypes.GNOME:
    case SortTypes.SHAKER:
    case SortTypes.ODD_EVEN:
      return {
        average: QUADRATIC_COMPLEXITY,
        best: LINEAR_COMPLEXITY,
        worst: QUADRATIC_COMPLEXITY,
        space: CONST_COMPLEXITY
      };
  }
};
