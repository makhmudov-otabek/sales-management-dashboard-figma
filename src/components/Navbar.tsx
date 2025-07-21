import Image from "next/image";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Profile from "@/../public/profile.svg";

export default function Navbar() {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <header className="w-full flex justify-between gap-8 items-center p-4">
      <div className="w-9/12 flex items-center gap-4 bg-[#21222D] p-4 rounded-xl">
        <IoSearch size={20} />
        <input
          className="focus:outline-0 w-full"
          type="search"
          placeholder="Search here..."
          onChange={inputHandler}
        />
      </div>
      <div className="flex items-center gap-4">
        <button>
          <GoBell size={24} />
        </button>

        <button className="w-[40px] h-[40px] rounded-full bg-gray-600">
          <Image className="w-full h-full" src={Profile} alt="profile" />
        </button>

        <button>
          <IoIosArrowDown size={24} />
        </button>
      </div>
    </header>
  );
}
