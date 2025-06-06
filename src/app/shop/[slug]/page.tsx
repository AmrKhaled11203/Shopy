import ColorSelector from "@/components/ColorSelector";
import QuantitySelector from "@/components/QuantitySelector";
import SizeSelector from "@/components/SizeSelector";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import YouMightAlsoLike from "../../../components/YouMightAlsoLike";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage(Props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await Props.params;

  const supabase = createServerComponentClient({ cookies });

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!product) return <p className="text-red-600">Product Not Found</p>;

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
        <div>
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-black font-semibold">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <ColorSelector />
          <SizeSelector />
          <div className="flex gap-10">
            <QuantitySelector />
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
      <YouMightAlsoLike />
    </div>
  );
}
