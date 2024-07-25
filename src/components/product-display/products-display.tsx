import { useEffect } from "react";

import "./products-display.css";

// COMPONENTS
import { ProductComponent } from "@/components/product-display/product/product.tsx";

// HOOKS
import { useProduct } from "@/store/product-slice.tsx";
import { useMoney } from "@/store/money-slice.tsx";

// TYPES
import { Product } from "@/types.ts";

// UTILS
import { getProducts } from "@/api";

export const ProductsDisplay = () => {
  const { products, selectedProduct, setProducts, toggleSelectedProduct } =
    useProduct();
  const { totalAmount, calculateChange } = useMoney();

  const handleProductChange = (product: Product) => {
    const isAboutToToggleProduct = selectedProduct?.id === product.id;
    toggleSelectedProduct(product);
    calculateChange(isAboutToToggleProduct ? 0 : product.price);
  };

  const fetchProducts = async () => {
    const productsFetched = await getProducts();

    setProducts(productsFetched);
  };

  useEffect(() => {
    fetchProducts().then((r) => r);
  }, []);

  if (!products.length) {
    return <div className="loading-state">Loading products...</div>;
  }

  return (
    <div className="product-display">
      {products.map(({ id, name, quantity, price }) => {
        const hasSelectedAProduct = !!selectedProduct;
        const isSelectedProductCurrentProduct = selectedProduct?.id !== id;
        const isEnteredAmountEnough = totalAmount >= price;

        return (
          <ProductComponent
            key={name}
            id={id}
            name={name}
            quantity={quantity}
            price={price}
            selected={id === selectedProduct?.id}
            onSelect={handleProductChange}
            disabled={
              !isEnteredAmountEnough ||
              (hasSelectedAProduct && isSelectedProductCurrentProduct)
            }
          />
        );
      })}
    </div>
  );
};
