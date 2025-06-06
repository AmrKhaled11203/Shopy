"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/cartSlice";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  image_url: string;
  description: string;
}

const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url,
        quantity: 1,
      })
    );
    toast.success("Added To Cart Successfully");
  };

  return (
    <Button onClick={handleAdd} className="rounded-full w-80 h-12">
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
