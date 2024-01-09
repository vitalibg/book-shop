import React, { useEffect } from "react";
import TextComponent from "../../common/text.component";
import SubscribeComponent from "../../subscribe/subscribe.component";
import style from "../../../style/all.module.css";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";
import { useAppDispatch } from "../../../store/hooks";
import { fetchNewBooks } from "../../../store/action";
import PaginationComponent from "../../pagination/pagination.component";

const NewReleasesPageComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"New releases book"} />
        </div>

        <PaginationComponent />

        <SubscribeComponent />
      </div>
      <FooterComponent />
    </>
  );
};

export default NewReleasesPageComponent;
