import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";

const CartComponent = () => {
  return (
    <div>
      <IconComponent icon={<FontAwesomeIcon icon={faCartShopping} />} />
    </div>
  );
};

export default CartComponent;
