import Image from "next/image";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoSearch } from "react-icons/io5";
import Profile from "@/../public/profile.svg";

export default function Navbar({ onClose }: { onClose: () => void }) {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <header className="w-full p-4 sticky top-0 left-0 bg-[#171821] z-[49]">
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-2 h-full md:hidden">
          <button
            onClick={onClose}
            className="text-white text-2xl h-full bg-[#21222D] p-2 rounded-md"
          >
            <IoMenu />
          </button>
        </div>

        <div className="col-span-10 md:col-span-8 flex items-center gap-4 bg-[#21222D] p-3 rounded-xl">
          <IoSearch size={20} />
          <input
            className="focus:outline-none w-full bg-transparent text-white"
            type="search"
            placeholder="Search here..."
            onChange={inputHandler}
          />
        </div>

        <div className="col-span-12 md:col-span-4 mt-4 md:mt-0 hidden md:block">
          <div className="flex justify-end items-center gap-4">
            <button>
              <GoBell size={24} className="text-white" />
            </button>

            <button className="w-[40px] h-[40px] rounded-full bg-gray-600 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={Profile}
                alt="profile"
              />
            </button>

            <button>
              <IoIosArrowDown size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
