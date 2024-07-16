import { Product } from "../../../types.ts";

import "./product.css";

interface Props {
  id: string;
  name: string;
  quantity: number;
  price: number;
  disabled?: boolean;
  selected?: boolean;
  onSelect: (product: Product) => void;
}

export const ProductComponent = ({
  quantity,
  name,
  price,
  id,
  disabled = false,
  selected = false,
  onSelect,
}: Props) => (
  <div
    id={id}
    key={name}
    className={`product ${disabled ? "disabled" : ""} ${selected ? "selected" : ""}`}
    onClick={() => !disabled && onSelect({ id, name, quantity, price })}
  >
    <div>{name}</div>
    <div>{quantity} pcs.</div>
    <div>{price} BGN</div>
  </div>
);
