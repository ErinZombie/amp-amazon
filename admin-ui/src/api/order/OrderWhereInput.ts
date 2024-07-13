import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  products?: ProductListRelationFilter;
  price?: FloatFilter;
  status?: JsonFilter;
  paymentIntent?: BooleanFilter;
};
