import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  user?: UserWhereUniqueInput;
  products?: ProductUpdateManyWithoutOrdersInput;
  price?: number;
  status?: InputJsonValue;
  paymentIntent?: boolean;
};
