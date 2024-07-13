import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number;
  description?: string;
  products?: ProductWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
