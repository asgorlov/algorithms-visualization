import React, { FC } from "react";
import { StripModel } from "../../models/strip.model";
import StripComponent from "./strip/strip.component";
import AlgorithmDescriptionComponent from "./algorithm-description/algorithm-description.component";
import { SortTypes } from "../../constants/sort-type.enum";

interface AlgorithmViewProps {
  stripArray: StripModel[];
  selectedSort: SortTypes;
  animationTime: number;
}

const AlgorithmViewComponent: FC<AlgorithmViewProps> = ({
  stripArray,
  selectedSort,
  animationTime
}) => {
  return (
    <div className="algorithm-view">
      <div className="algorithm-view-wrapper">
        <div className="algorithm-view-container">
          {stripArray.map((strip, index) => {
            return (
              <StripComponent
                key={`strip-${index}`}
                className={"algorithm-view-strip"}
                animationTime={animationTime}
                {...strip}
              />
            );
          })}
        </div>
        <AlgorithmDescriptionComponent selectedSort={selectedSort} />
      </div>
    </div>
  );
};

export default AlgorithmViewComponent;
