import { User } from "../user/User";
import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  products?: Array<Product>;
  price: number;
  status: JsonValue;
  paymentIntent: boolean;
};
