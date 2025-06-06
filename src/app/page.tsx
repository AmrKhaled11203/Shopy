import Home from "@/components/home";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import BrwoseByDressStyly from "@/components/BrwoseByDressStyly";

function page() {
  return (
    <div>
      <Home />
      <NewArrivals />
      <TopSelling />
      <BrwoseByDressStyly />
    </div>
  );
}

export default page;
