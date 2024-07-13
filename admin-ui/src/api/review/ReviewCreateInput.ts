import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  rating: number;
  description: string;
  products: ProductWhereUniqueInput;
  user: UserWhereUniqueInput;
};
