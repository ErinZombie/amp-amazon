import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  user: UserWhereUniqueInput;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  price: number;
  status: InputJsonValue;
  paymentIntent: boolean;
};
