import React from "react";
import { Order } from "../Order";
import myOrderProps from "../../../my-order.json";

export default {
  title: "Layouts/Order",
  components: Order,
};

export const Default = () => {
  return <Order />;
};

export const JsonProps = () => {
  return <Order {...myOrderProps} />;
};
