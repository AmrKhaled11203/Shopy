import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  slug: string;
}

export default function ProductCard({
  image,
  name,
  price,
  slug,
}: ProductCardProps) {
  return (
    <div>
      <Link href={`/shop/${slug}`}>
        <Card className="w-full max-w-xs shadow-xl rounded-xl cursor-pointer">
          <CardContent className="flex flex-col items-center p-4">
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="object-contain"
            />
            <h3 className="mt-4 text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
