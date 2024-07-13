import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  salePrice?: SortOrder;
  discountPrice?: SortOrder;
  colors?: SortOrder;
  variants?: SortOrder;
  images?: SortOrder;
  categoryId?: SortOrder;
  orderId?: SortOrder;
};
