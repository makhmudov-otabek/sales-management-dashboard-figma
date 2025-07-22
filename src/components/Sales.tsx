import Image from "next/image";
import ChartIcon from "@/../public/chart.svg";
import OrderIcon from "@/../public/order.svg";
import SoldIcon from "@/../public/sold.svg";
import NewUserIcon from "@/../public/new-user.svg";
import SalesBar from "./SalesBar";

export default function Sales() {
  return (
    <section className="w-full grid grid-cols-3 justify-between gap-8 p-4">
      <div className="col-span-3 md:col-span-3 xl:col-span-2 p-4 bg-[#21222D] rounded-xl">
        <div className="pb-4">
          <p className="font-bold">Today’s Sales</p>
          <p className="text-[#A0A0A0]">Sales Summary</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-between mt-4">
          <div className="flex-1 bg-[#171821] px-5 py-4 rounded-xl">
            <Image width={40} height={40} src={ChartIcon} alt="Chart icon" />
            <p className="text-3xl mt-6 font-bold">$5k</p>
            <p className="my-1">Total sales</p>
            <p className="text-[#FEB95A]">+10% from yesterday</p>
          </div>

          <div className="flex-1 bg-[#171821] px-5 py-4 rounded-xl">
            <Image width={40} height={40} src={OrderIcon} alt="Chart icon" />
            <p className="text-3xl mt-6 font-bold">$5k</p>
            <p className="my-1">Total sales</p>
            <p className="text-[#A9DFD8]">+10% from yesterday</p>
          </div>

          <div className="flex-1 bg-[#171821] px-5 py-4 rounded-xl">
            <Image width={40} height={40} src={SoldIcon} alt="Chart icon" />
            <p className="text-3xl mt-6 font-bold">$5k</p>
            <p className="my-1">Total sales</p>
            <p className="text-[#F2C8ED]">+10% from yesterday</p>
          </div>

          <div className="flex-1 bg-[#171821] px-5 py-4 rounded-xl">
            <Image width={40} height={40} src={NewUserIcon} alt="Chart icon" />
            <p className="text-3xl mt-6 font-bold">$5k</p>
            <p className="my-1">Total sales</p>
            <p className="text-[#20AEF3]">+10% from yesterday</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 md:col-span-3 xl:col-span-1 bg-[#21222D] rounded-xl">
        <p className="font-bold text-xl p-4 pb-0">Level</p>
        <SalesBar />
        <div className="p-4 border-t border-[#333] flex justify-center items-center">
          <p className="flex items-center gap-2 px-4 border-solid border-r border-[#FFFFFF2E] text-[#A0A0A0]">
            <span className="block w-[10px] h-[10px] rounded-full bg-[#A9DFD8]" />
            Volume
          </p>
          <p className="flex items-center gap-2 px-4 text-[#A0A0A0]">
            <span className="block w-[10px] h-[10px] rounded-full bg-[#2B2B36]" />
            Service
          </p>
        </div>
      </div>
    </section>
  );
}
