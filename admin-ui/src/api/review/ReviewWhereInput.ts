import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: IntFilter;
  description?: StringFilter;
  products?: ProductWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
