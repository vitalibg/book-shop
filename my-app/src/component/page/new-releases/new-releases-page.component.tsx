import React from "react";
import TextComponent from "../../common/text.component";
import BookContainerComponent from "../../book/book-container/book-container.component";
import PaginationComponent from "../../pagination/pagination.component";
import SubscribeComponent from "../../subscribe/subscribe.component";

const NewReleasesPageComponent = () => {
  return (
    <div>
      <TextComponent text={"New releases book"}/>
      <BookContainerComponent image={"123"} title={"TestPrice"} description={"TestDescription"} price={"Price"} />
      <PaginationComponent />
      <SubscribeComponent />
    </div>
  );
};

export default NewReleasesPageComponent;
