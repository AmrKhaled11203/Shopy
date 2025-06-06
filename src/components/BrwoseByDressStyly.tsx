import gym from "../../public/Frame 63.png";
import formal from "../../public/Frame 62.png";
import party from "../../public/Frame 64.png";
import casual from "../../public/Frame 61.png";
import Image from "next/image";

function BrwoseByDressStyly() {
  return (
    <div className="my-6 py-6">
      <h2 className=" flex justify-center text-4xl font-bold my-4 py-6">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4">
          <Image src={casual} alt="casual" />
          <Image src={formal} alt="formal" />
        </div>
        <div className="flex justify-center gap-4">
          <Image src={party} alt="party" />
          <Image src={gym} alt="gym" />
        </div>
      </div>
    </div>
  );
}

export default BrwoseByDressStyly;
