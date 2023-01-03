import React, { FC, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { Content, Footer, Header } from "antd/es/layout/layout";
import ACheckbox from "../a-checkbox/a-checkbox.component";
import { SortTypes } from "../../constants/sort-type.enum";
import AButton from "../a-button/a-button.component";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import clsx from "clsx";

interface MainPageProps {
  isSortSelected: boolean;
  selectedSort: SortTypes | null;
  onChangeCheckbox: (e: CheckboxChangeEvent) => void;
  onClickReset: () => void;
  onClickSubmit: () => void;
}

const MainPageComponent: FC<MainPageProps> = ({
  isSortSelected,
  selectedSort,
  onChangeCheckbox,
  onClickReset,
  onClickSubmit
}) => {
  const { t } = useTranslation();
  const LazyAlgorithmControls = lazy(
    () => import("../algorithm-controls/algorithm-controls.container")
  );
  const LazyAlgorithmView = lazy(
    () => import("../algorithm-view/algorithm-view.container")
  );

  return (
    <div className="main-page">
      {isSortSelected ? (
        <Suspense>
          <LazyAlgorithmControls />
          <LazyAlgorithmView />
        </Suspense>
      ) : (
        <Layout className="main-page-layout">
          <Header className="main-page-layout-header">
            {t("mainPage.title") as string}
          </Header>
          <Content className="main-page-layout-content">
            <div className={"main-page-layout-content__description"}>
              {t("mainPage.description") as string}
            </div>
            <div className="main-page-layout-content__sort-array">
              {Object.entries(SortTypes).map(([key, value]) => {
                const isChecked = !!selectedSort && selectedSort === value;
                return (
                  <ACheckbox
                    key={key}
                    className={clsx(
                      "main-page-layout-content__sort-array__checkbox",
                      {
                        _bold: isChecked
                      }
                    )}
                    checked={isChecked}
                    disabled={!!selectedSort && selectedSort !== value}
                    value={value}
                    onChange={onChangeCheckbox}
                  >
                    {t(`sort.${value}.title`) as string}
                  </ACheckbox>
                );
              })}
            </div>
          </Content>
          <Footer className="main-page-layout-footer">
            <AButton
              className="main-page-layout-footer__btn-submit"
              disabled={!selectedSort}
              onClick={onClickSubmit}
            >
              <CheckOutlined />
              <span>{t("button.submit") as string}</span>
            </AButton>
            <AButton
              className="main-page-layout-footer__btn-reset"
              onClick={onClickReset}
            >
              <DeleteOutlined />
              <span>{t("button.reset") as string}</span>
            </AButton>
          </Footer>
        </Layout>
      )}
    </div>
  );
};

export default MainPageComponent;
