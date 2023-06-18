import * as yup from "yup";
import { getTotalPrice } from "./Order.utils";

// eslint-disable-next-line import/prefer-default-export
export const orderSchema = (props) => {
  return yup.object().shape({
    extraIds: yup
      .array()
      .max(4, "מותר רק 4 תוספות")
      .test("limit-price", "אסור לשלם יותר מ18 דולר", function (value) {
        const totalPrice = getTotalPrice({
          freeExtras: props.freeExtras,
          basicPrice: props.basicPrice,
          selectedExtras: props.extras?.filter((e) => value.includes(e._id)),
        });

        return totalPrice < 18;
      }),
    notes: yup.string().when("cutlery", {
      is: true,
      then: (schema) => schema.required("חובה לפרט"),
    }),
    cutlery: yup.boolean(),
  });
};
