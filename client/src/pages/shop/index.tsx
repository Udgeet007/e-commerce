import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "./product";
import "./styles.css"


export const ShopPage = () => {
  const { products } = useGetProducts();
  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
         <Product product={product} />
        ))}
      </div>
    </div>
  );
};
