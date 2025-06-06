import { Mail } from "lucide-react";
import { Button } from "./ui/button";
function Contact() {
  return (
    <div className="bg-black py-6 border-b border-white h-40 w-5/6 mx-auto rounded-xl">
      <div className="flex justify-between items-center gap-4 flex-wrap mx-20">
        <p className="text-4xl text-white font-semibold w-110">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex flex-col gap-2">
          <div className="relative w-120">
            <Mail className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-white w-120 h-10 px-9 text-sm rounded-full"
            />
          </div>
          <Button
            variant={"secondary"}
            className="w-120 h-10 text-sm rounded-full"
          >
            Subscribe To Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
