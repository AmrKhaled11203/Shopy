import div1 from "../../public/div1.png";
import ver from "../../public/ver.png";
import zara from "../../public/zara-logo-1 1.png";

import prada from "../../public/prada.png";
import calvin from "../../public/calvin.png";
import guc from "../../public/gucci.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
function home() {
  return (
    <div>
      <div className="flex flex-col mt-30 md:flex-row">
        <div className="pl-25">
          <h2 className="text-6xl font-bold w-100 ">
            Find Clothes That Matches Your Style
          </h2>
          <p className="w-130 pt-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="pt-4">
            <Link href="/shop">
              <Button className="rounded-full w-50 h-15">Shop Now</Button>
            </Link>
          </div>
          <div className="flex gap-6 m-4">
            <div>
              <h4 className="font-bold text-4xl">200+</h4>
              <p>International Brands</p>
            </div>
            <div>
              <h4 className="font-bold text-4xl">2,000+</h4>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h4 className="font-bold text-4xl">30,000+</h4>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={div1} alt="div1" />
        </div>
      </div>
      <div className="bg-black py-6 border-b border-white h-40 md:h-30">
        <div className="flex justify-between items-center mx-15 mt-4">
          <Image src={ver} alt="ver" />
          <Image src={zara} alt="zara" />
          <Image src={guc} alt="guc" />
          <Image src={prada} alt="prada" />
          <Image src={calvin} alt="calvin" />
        </div>
      </div>
    </div>
  );
}

export default home;
