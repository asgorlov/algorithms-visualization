import React, { FC } from "react";
import { StripModel } from "../../models/strip.model";
import StripComponent from "./strip/strip.component";

interface AlgorithmViewProps {
  stripArray: StripModel[];
  animationTime: number;
}

const AlgorithmViewComponent: FC<AlgorithmViewProps> = ({
  stripArray,
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
        <div className="algorithm-view-description">Description</div>
      </div>
    </div>
  );
};

export default AlgorithmViewComponent;
