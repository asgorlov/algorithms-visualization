import React, { FC, useMemo } from "react";
import { SortTypes } from "../../../constants/sort-type.enum";
import { useTranslation } from "react-i18next";
import { getComplexity } from "../../../utils/algorithms.util";

interface AlgorithmDescriptionComponentProps {
  selectedSort: SortTypes;
}

const AlgorithmDescriptionComponent: FC<AlgorithmDescriptionComponentProps> = ({
  selectedSort
}) => {
  const { t } = useTranslation();
  const complexity = useMemo(() => getComplexity(selectedSort), [selectedSort]);

  return (
    <div className="algorithm-view-description">
      <div className="algorithm-view-description_body">
        <h3>{t("algorithmDescription.body.title") as string}</h3>
        <span>
          {t(`algorithmDescription.body.textSort.${selectedSort}`) as string}
        </span>
      </div>
      <div className="algorithm-view-description_complexity">
        <h3>{t("algorithmDescription.complexity.title") as string}</h3>
        <table>
          <tr>
            <th>
              {t("algorithmDescription.complexity.rowTitle.average") as string}
            </th>
            <td>{complexity.average}</td>
          </tr>
          <tr>
            <th>
              {t("algorithmDescription.complexity.rowTitle.best") as string}
            </th>
            <td>{complexity.best}</td>
          </tr>
          <tr>
            <th>
              {t("algorithmDescription.complexity.rowTitle.worst") as string}
            </th>
            <td>{complexity.worst}</td>
          </tr>
          <tr>
            <th>
              {t("algorithmDescription.complexity.rowTitle.space") as string}
            </th>
            <td>{complexity.space}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AlgorithmDescriptionComponent;
