import { useProduct } from "../../../store/product-slice.tsx";

export const ProductInformation = () => {
  const { selectedProduct } = useProduct();

  return (
    <>
      <div className="information-display">
        <h3>Product</h3>
        <div>{selectedProduct?.name ?? "No product chosen"}</div>
      </div>

      <div className="information-display">
        <h3>Price</h3>

        <div>{selectedProduct?.price ?? 0} BGN</div>
      </div>
    </>
  );
};
