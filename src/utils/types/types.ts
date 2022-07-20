export type Product = {
  avatar?: string;
  name?: string;
  description?: string;
  developerEmail?: string;
  category?: string;
  price?: string;
  id?: string;
};

export type ComponentProps = {
  product: Product;
};
