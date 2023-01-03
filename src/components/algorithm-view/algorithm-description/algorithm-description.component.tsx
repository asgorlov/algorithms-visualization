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
        <h3>{t<string>("algorithmDescription.body.title")}</h3>
        <div className="algorithm-view-description_body-text">
          <span>{t<string>(`sort.${selectedSort}.title`)}</span>
          <span>
            {t<string>(`algorithmDescription.body.textSort.${selectedSort}`)}
          </span>
        </div>
        <div className="algorithm-view-description_body-link">
          <span>{t<string>("algorithmDescription.body.details")}</span>
          <a
            href={t<string>(
              `algorithmDescription.body.linkSort.${selectedSort}`
            )}
          >
            {t<string>("algorithmDescription.body.linkText")}
          </a>
        </div>
      </div>
      <div className="algorithm-view-description_complexity">
        <h3>{t<string>("algorithmDescription.complexity.title")}</h3>
        <table>
          <tr>
            <th>
              {t<string>("algorithmDescription.complexity.rowTitle.average")}
            </th>
            <td>{complexity.average}</td>
          </tr>
          <tr>
            <th>
              {t<string>("algorithmDescription.complexity.rowTitle.best")}
            </th>
            <td>{complexity.best}</td>
          </tr>
          <tr>
            <th>
              {t<string>("algorithmDescription.complexity.rowTitle.worst")}
            </th>
            <td>{complexity.worst}</td>
          </tr>
          <tr>
            <th>
              {t<string>("algorithmDescription.complexity.rowTitle.space")}
            </th>
            <td>{complexity.space}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AlgorithmDescriptionComponent;
