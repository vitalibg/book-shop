import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";
import { Link } from "react-router-dom";

const CartComponent = () => {
  return (
    <Link to={"/cart"}>
      <IconComponent icon={<FontAwesomeIcon icon={faCartShopping} />} />
    </Link>
  );
};

export default CartComponent;
