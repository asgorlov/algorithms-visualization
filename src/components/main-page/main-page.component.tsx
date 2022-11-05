import React, { FC, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { Content, Footer, Header } from "antd/es/layout/layout";
import ACheckbox from "../a-checkbox/a-checkbox.component";
import { SortTypes } from "../../constants/sort-types.enum";
import AButton from "../a-button/a-button.component";
import { CheckboxChangeEvent } from "antd/es/checkbox";

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
  const LazyAlgorithmView = lazy(
    () => import("../algorithm-view/algorithm-view.container")
  );

  return (
    <div className="main-page">
      {isSortSelected ? (
        <Suspense>
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
                return (
                  <ACheckbox
                    key={key}
                    className="main-page-layout-content__sort-array__checkbox"
                    checked={!!selectedSort && selectedSort === key}
                    disabled={!!selectedSort && selectedSort !== key}
                    value={key}
                    onChange={onChangeCheckbox}
                  >
                    {t(`sort.${value}`) as string}
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
              {t("button.submit") as string}
            </AButton>
            <AButton
              className="main-page-layout-footer__btn-reset"
              onClick={onClickReset}
            >
              <DeleteOutlined />
              {t("button.reset") as string}
            </AButton>
          </Footer>
        </Layout>
      )}
    </div>
  );
};

export default MainPageComponent;
